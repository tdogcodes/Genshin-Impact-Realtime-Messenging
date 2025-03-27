import { act, renderHook } from '@testing-library/react';
import { useChatStore } from '../lib/chatStore';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom';

// ✅ Correctly Mock Zustand’s useUserStore
vi.mock('../lib/userStore', async () => {
  return {
    useUserStore: vi.fn(() => ({
      currentUser: { id: 'user123', blocked: ['user456'] },
      isLoading: false,
      fetchUserInfo: vi.fn(),
    })),
  };
});

// Import AFTER mocking
import { useUserStore } from '../lib/userStore';

beforeEach(() => {
  useChatStore.setState({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
  });
});

describe('useChatStore', () => {
  test('initial state should have null chatId, null user, and not blocked states', () => {
    const { result } = renderHook(() => useChatStore());

    expect(result.current.chatId).toBeNull();
    expect(result.current.user).toBeNull();
    expect(result.current.isCurrentUserBlocked).toBe(false);
    expect(result.current.isReceiverBlocked).toBe(false);
  });

  test('changeChat should update state when the receiver is not blocked', () => {
    useUserStore.mockReturnValue({
      currentUser: { id: 'user123', blocked: [] },
      isLoading: false,
    });

    const { result } = renderHook(() => useChatStore());
    const user = { id: 'user789', blocked: [] };

    act(() => {
      result.current.changeChat('chat123', user);
    });

    expect(result.current.chatId).toBe('chat123');
    expect(result.current.user).toEqual(user);
    expect(result.current.isCurrentUserBlocked).toBe(false);
    expect(result.current.isReceiverBlocked).toBe(false);
  });

  test('changeChat should set isReceiverBlocked when the current user blocks the receiver', () => {
    useUserStore.mockReturnValue({
      currentUser: { id: 'user123', blocked: ['user456'] },
      isLoading: false,
    });

    const { result } = renderHook(() => useChatStore());
    const user = { id: 'user456', blocked: [] };

    act(() => {
      result.current.changeChat('chat123', user);
    });

    expect(result.current.chatId).toBe('chat123');
    expect(result.current.user).toEqual(user);
    expect(result.current.isCurrentUserBlocked).toBe(false);
    expect(result.current.isReceiverBlocked).toBe(true);
  });

  test('changeChat should set isCurrentUserBlocked when the receiver blocks the current user', () => {
    useUserStore.mockReturnValue({
      currentUser: { id: 'user123', blocked: [] },
      isLoading: false,
    });

    const { result } = renderHook(() => useChatStore());
    const user = { id: 'user789', blocked: ['user123'] };

    act(() => {
      result.current.changeChat('chat123', user);
    });

    expect(result.current.chatId).toBeTruthy();
    expect(result.current.user).toEqual(user);
    expect(result.current.isCurrentUserBlocked).toBeTruthy();
    expect(result.current.isReceiverBlocked).toBe(false);
  });

  test('resetChat should reset the chat state', () => {
    const { result } = renderHook(() => useChatStore());

    act(() => {
      result.current.changeChat('chat123', { id: 'user789', blocked: [] });
    });

    expect(result.current.chatId).toBe('chat123');
    expect(result.current.user).toEqual({ id: 'user789', blocked: [] });

    act(() => {
      result.current.resetChat();
    });

    expect(result.current.chatId).toBeNull();
    expect(result.current.user).toBeNull();
    expect(result.current.isCurrentUserBlocked).toBe(false);
    expect(result.current.isReceiverBlocked).toBe(false);
  });
});

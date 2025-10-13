// This file establishes a React Context for managing notifications throughout the application.
// It fetches notifications from Firestore, tracks their read status using localStorage,
// and provides the notification data and an unread count to consuming components.

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// FIX: Removed modular firestore imports as they are not needed with compat syntax.
import { db } from '../services/firebase.ts';
import { Notification } from '../types.ts';

interface NotificationsContextType {
  notifications: Notification[];
  unreadCount: number;
  markAllAsRead: () => void;
}

const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  unreadCount: 0,
  markAllAsRead: () => {},
});

export const useNotifications = () => useContext(NotificationsContext);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // FIX: Used Firebase v9 compat syntax for querying and listening to a collection.
    const q = db.collection('notifications').orderBy('timestamp', 'desc');

    const unsubscribe = q.onSnapshot(
      (snapshot) => {
        const fetchedNotifications = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Notification[];

        const readNotificationsIds = JSON.parse(localStorage.getItem('readNotifications') || '[]');
        
        const updatedNotifications = fetchedNotifications.map(n => ({
            ...n,
            isRead: readNotificationsIds.includes(n.id!),
        }));

        setNotifications(updatedNotifications);
        
        const newUnreadCount = updatedNotifications.filter(n => !n.isRead).length;
        setUnreadCount(newUnreadCount);
      },
      (err) => {
        console.error("Error fetching notifications: ", err);
      }
    );

    return () => unsubscribe();
  }, []);

  const markAllAsRead = () => {
    const allIds = notifications.map(n => n.id).filter(id => id !== undefined) as string[];
    localStorage.setItem('readNotifications', JSON.stringify(allIds));
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    setUnreadCount(0);
  };


  return (
    <NotificationsContext.Provider value={{ notifications, unreadCount, markAllAsRead }}>
      {children}
    </NotificationsContext.Provider>
  );
};
// This component renders the notification bell icon in the navigation bar.
// It uses the NotificationsContext to display an unread count and a dropdown
// list of notifications when clicked, allowing users to view and manage their alerts.

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '../context/NotificationsContext.tsx';
import { BellIcon } from './IconComponents.tsx';
import { Notification } from '../types.ts';

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => {
    const timeAgo = (timestamp: any): string => {
        if (!timestamp || !timestamp.toDate) return 'Just now';
        const date = timestamp.toDate();
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " years ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " minutes ago";
        return "Just now";
    };

    return (
        <div className={`p-3 border-b border-slate-700/50 ${!notification.isRead ? 'bg-accent/10' : ''}`}>
            <p className="font-bold text-text-light text-sm">{notification.title}</p>
            <p className="text-xs text-text-dark mt-1">{notification.message}</p>
            <p className="text-xs text-slate-500 mt-2 text-right">{timeAgo(notification.timestamp)}</p>
        </div>
    );
};

const Notifications: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { notifications, unreadCount, markAllAsRead } = useNotifications();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    const handleMarkAllRead = () => {
        markAllAsRead();
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="relative text-text-dark hover:text-accent transition-colors duration-300">
                <BellIcon className="w-6 h-6" />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {unreadCount}
                    </span>
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-12 right-0 w-80 bg-slate-800/90 backdrop-blur-lg rounded-lg shadow-2xl border border-slate-700/50 overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <header className="flex justify-between items-center p-3 border-b border-slate-700">
                            <h4 className="font-bold text-text-light">Notifications</h4>
                            {unreadCount > 0 && (
                                <button onClick={handleMarkAllRead} className="text-xs text-accent hover:underline">
                                    Mark all as read
                                </button>
                            )}
                        </header>
                        <div className="max-h-96 overflow-y-auto">
                            {notifications.length > 0 ? (
                                notifications.map(n => <NotificationItem key={n.id} notification={n} />)
                            ) : (
                                <p className="p-4 text-center text-sm text-text-dark">No new notifications.</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Notifications;
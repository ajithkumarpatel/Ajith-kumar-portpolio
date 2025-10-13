// This component renders a dedicated section on the main page to display recent announcements.
// It fetches data from the NotificationsContext and presents the latest few items in a
// clear, readable format for visitors.

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { useNotifications } from '../context/NotificationsContext.tsx';
import { Notification } from '../types.ts';

const AnnouncementCard: React.FC<{ announcement: Notification, index: number }> = ({ announcement, index }) => {
    const timeAgo = (timestamp: any): string => {
        if (!timestamp || !timestamp.toDate) return 'Recent';
        const date = timestamp.toDate();
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        if (seconds < 60) return "Just now";
        const intervals: { [key: string]: number } = {
            'year': 31536000,
            'month': 2592000,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
        };
        for (const key in intervals) {
            const interval = Math.floor(seconds / intervals[key]);
            if (interval >= 1) {
                return interval + ` ${key}${interval > 1 ? 's' : ''} ago`;
            }
        }
        return 'Recent';
    };

    return (
        <motion.div
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-text-light">{announcement.title}</h3>
                <span className="text-xs text-slate-400 flex-shrink-0 ml-4">{timeAgo(announcement.timestamp)}</span>
            </div>
            <p className="text-text-dark">{announcement.message}</p>
        </motion.div>
    );
};


const Announcements: React.FC = () => {
    const { notifications } = useNotifications();

    return (
        <SectionWrapper id="announcements" title="Latest Announcements">
            <div className="max-w-3xl mx-auto">
                {notifications.length > 0 ? (
                    <div className="space-y-6">
                        {notifications.slice(0, 5).map((announcement, index) => ( // Show latest 5
                            <AnnouncementCard key={announcement.id} announcement={announcement} index={index} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-text-dark">No announcements at the moment. Please check back later!</p>
                )}
            </div>
        </SectionWrapper>
    );
};

export default Announcements;
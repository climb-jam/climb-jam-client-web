import React from 'react';
import type {Ascent} from "../../@types/ascent.type.ts";
import {
    Box,
    Typography,
    IconButton,
    Button,
    Divider,
    Paper,
    Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GradeBadge from '../ascents/GradeBadge.tsx';
import CragSessionCard from './Crag';

type AscentHistoryCardProps = {
    ascent: Ascent;
    onCollapse: () => void;
}

const getStyleIcon = (style: string) => {
    switch (style) {
        case 'flash':
            return '⚡';
        case 'onsight':
            return '👁️';
        case 'redpoint':
            return '🔴';
        case 'project':
            return '🎯';
        default:
            return '';
    }
};


const AscentHistoryCard: React.FC<AscentHistoryCardProps> = ({ascent, onCollapse}) => {
    return (
        <div className="mx-4">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Session du {ascent.session.date}
                        </h3>
                        <button
                            onClick={onCollapse}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-400"/>
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">{session.timeAgo}</p>

                    <button
                        className="flex items-center space-x-2 mt-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <MessageSquare className="w-4 h-4"/>
                        <span className="text-sm font-medium">COMMENTER MA SESSION</span>
                    </button>
                </div>

                {/* Routes Section */}
                <div className="p-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                            Mes croix du {ascent.date}
                        </span>
                    </div>

                    <div className="space-y-3">
                        {ascent.session.routes.map((route) => (
                            <div key={route.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <GradeChip grade={ascent.route.grade}/>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-900">
                                            {ascent.route.name}
                                        </span>
                                        <span className="text-xs">
                                            {getStyleIcon(ascent.style)}
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        {ascent.tries} essai{ascent.tries > 1 ? 's' : ''}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Crag Section */}
                <div className="px-4 pb-4">
                    <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="w-4 h-4 text-gray-500"/>
                        <span className="text-sm font-medium text-gray-700">
                            Les lieux où j'ai grimpé
                        </span>
                    </div>

                    <LocationCard location={ascent.session.crag} expanded/>
                </div>

                {/* Comment Section */}
                {ascent.comment && (
                    <div className="px-4 pb-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="flex items-start space-x-2">
                                <MessageSquare className="w-4 h-4 text-blue-600 mt-0.5"/>
                                <p className="text-sm text-blue-800">{ascent.comment}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AscentHistoryCard;
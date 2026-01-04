import { ReactNode } from 'react';
import {Info, AlertTriangle, CheckCircle, XCircle, MessageSquareWarning} from 'lucide-react';

interface CalloutProps {
    type?: 'info' | 'warning' | 'success' | 'error';
    children: ReactNode;
}

export function Callout({ type = 'info', children }: CalloutProps) {
    const styles = {
        info: {
            container: 'bg-blue-50 border-blue-200',
            icon: 'text-blue-600',
            Icon: Info
        },
        warning: {
            container: 'bg-yellow-50 border-yellow-200',
            icon: 'text-yellow-600',
            Icon: AlertTriangle
        },
        success: {
            container: 'bg-green-50 border-green-200',
            icon: 'text-green-600',
            Icon: CheckCircle
        },
        error: {
            container: 'bg-red-50 border-red-200',
            icon: 'text-red-600',
            Icon: XCircle
        },
        important: {
            container: 'bg-purple-50 border-purple-200',
            icon: 'text-purple-600',
            Icon: MessageSquareWarning
        }
    };

    const style = styles[type];
    const IconComponent = style.Icon;

    return (
        <div className={`not-prose flex gap-3 rounded-lg border p-4 my-4 ${style.container}`}>
            <IconComponent className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.icon}`} />
            <div className="flex-1 text-sm leading-relaxed">
                {children}
            </div>
        </div>
    );
}

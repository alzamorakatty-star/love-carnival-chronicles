import { LucideIcon } from 'lucide-react';

interface TimelineEvent {
  icon: string;
  title: string;
  time: string;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

const TimelineSection = ({ events }: TimelineSectionProps) => {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex gap-6 md:gap-8 min-w-max md:min-w-0 md:justify-center px-4">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center space-y-3 min-w-[120px]">
            {/* Circular icon container */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-amber-50 border-2 border-pink-200/50 flex items-center justify-center shadow-md">
                <span className="text-3xl">{event.icon}</span>
              </div>
              {/* Connecting line (hidden on last item) */}
              {index < events.length - 1 && (
                <div className="hidden md:block absolute top-10 left-20 w-8 h-0.5 bg-gradient-to-r from-pink-200/50 to-amber-100/50" />
              )}
            </div>
            
            {/* Event details */}
            <div className="text-center space-y-1">
              <p className="font-playfair text-foreground text-sm md:text-base font-medium">
                {event.title}
              </p>
              <p className="font-playfair text-primary text-base md:text-lg font-semibold">
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;

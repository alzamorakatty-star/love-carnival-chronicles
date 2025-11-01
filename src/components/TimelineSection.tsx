import { LucideIcon, Heart } from 'lucide-react';

interface TimelineEvent {
  icon: LucideIcon;
  title: string;
  time: string;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

const TimelineSection = ({ events }: TimelineSectionProps) => {
  return (
    <div className="w-full overflow-x-auto pb-8 scrollbar-hide">
      <div className="flex gap-4 md:gap-8 min-w-max md:min-w-0 md:justify-center px-6">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center space-y-3 min-w-[160px] animate-fade-in">
            {/* Circular icon container matching reference image */}
            <div className="relative">
              {/* Decorative heart above some circles */}
              {index % 2 === 0 && (
                <Heart 
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 text-pink-300/60 fill-pink-300/40" 
                />
              )}
              
              {/* Main circle with icon */}
              <div className="relative w-32 h-32 rounded-full bg-background border-2 border-pink-200/40 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group">
                <event.icon className="w-12 h-12 text-amber-600/70 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                
                {/* Connecting arc line */}
                {index < events.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-pink-200/30" />
                )}
              </div>
            </div>
            
            {/* Time and event label */}
            <div className="text-center space-y-1">
              <p className="font-playfair text-amber-600/80 text-xl md:text-2xl font-medium">
                {event.time}
              </p>
              <p className="font-playfair text-pink-300/70 text-sm md:text-base uppercase tracking-widest">
                {event.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;

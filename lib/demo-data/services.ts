import { type Database } from '@/lib/database.types';

type Service = Database['public']['Tables']['services']['Row'] & {
  profiles: {
    full_name: string | null;
    avatar_url: string | null;
  };
};

export const demoServices: Service[] = [
  {
    id: '1',
    title: 'Full-Stack Web Development',
    description: 'Custom web applications built with React, Next.js, and Node.js. Includes database design, API development, and deployment.',
    freelancer_id: 'demo-freelancer-1',
    category: 'Development',
    price: 75,
    created_at: '2024-01-01T00:00:00Z',
    profiles: {
      full_name: 'Alex Chen',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    }
  },
  {
    id: '2',
    title: 'UI/UX Design Services',
    description: 'Professional UI/UX design for web and mobile applications. Includes user research, wireframes, and high-fidelity prototypes.',
    freelancer_id: 'demo-freelancer-2',
    category: 'Design',
    price: 60,
    created_at: '2024-01-02T00:00:00Z',
    profiles: {
      full_name: 'Emma Wilson',
      avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  },
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Native iOS and Android app development using React Native. Complete solution from concept to app store deployment.',
    freelancer_id: 'demo-freelancer-3',
    category: 'Development',
    price: 85,
    created_at: '2024-01-03T00:00:00Z',
    profiles: {
      full_name: 'David Kim',
      avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  },
  {
    id: '4',
    title: 'Content Writing & SEO',
    description: 'High-quality content writing with SEO optimization. Blog posts, articles, and website copy that drives traffic.',
    freelancer_id: 'demo-freelancer-4',
    category: 'Writing',
    price: 45,
    created_at: '2024-01-04T00:00:00Z',
    profiles: {
      full_name: 'Sophie Martinez',
      avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  },
  {
    id: '5',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services including social media management, PPC campaigns, and analytics.',
    freelancer_id: 'demo-freelancer-5',
    category: 'Marketing',
    price: 55,
    created_at: '2024-01-05T00:00:00Z',
    profiles: {
      full_name: 'James Anderson',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    }
  },
  {
    id: '6',
    title: 'Logo & Brand Identity',
    description: 'Professional logo design and brand identity packages. Includes style guides and brand assets.',
    freelancer_id: 'demo-freelancer-6',
    category: 'Design',
    price: 65,
    created_at: '2024-01-06T00:00:00Z',
    profiles: {
      full_name: 'Lisa Taylor',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop'
    }
  }
];
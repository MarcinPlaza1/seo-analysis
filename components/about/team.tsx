"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "SEO expert with 15+ years of experience",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Tech leader and full-stack developer",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emma Davis",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Product strategist and UX specialist",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

export function AboutTeam() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the experts behind SEO Master.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <img src={member.image} alt={member.name} />
              </Avatar>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.github} className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
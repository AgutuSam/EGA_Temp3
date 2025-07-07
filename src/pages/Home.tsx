import React from 'react';
import { ArrowRight, Award, ChevronRight, Clock, Cpu, Users, Calendar, Target, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroSection } from '../components/HomePage/HeroSection';

export function Home() {
  return <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 bg-noir-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 reveal-animation">
            Elevate Your Game With Our{' '}
            <span className="neon-text animate-neon-pulse">Premium Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: <Users className="h-10 w-10 text-neon-cyan" />,
            title: 'Elite Coaching',
            description: 'Learn from PGA-certified professionals with proven track records in developing champions.'
          }, {
            icon: <Cpu className="h-10 w-10 text-neon-blue" />,
            title: 'Advanced Technology',
            description: 'Utilize state-of-the-art swing analysis, simulators, and performance tracking systems.'
          }, {
            icon: <Award className="h-10 w-10 text-neon-gold" />,
            title: 'Personalized Programs',
            description: 'Custom training regimens tailored to your specific goals, skill level, and physical abilities.'
          }].map((service, index) => <div key={index} className="p-6 rounded-lg glass-dark hover:shadow-neon-lg transition-all duration-300 reveal-animation float-animation">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-exo font-bold mb-3 text-noir-100">{service.title}</h3>
                <p className="text-noir-300 font-manrope">{service.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-20 bg-noir-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-animation">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-noir-100">
                Beyond the Swing – The 
                <span className="neon-text-gold animate-neon-pulse"> Element Difference</span>
              </h2>
              <p className="text-noir-300 mb-6 font-manrope">
                At Element Golf Academy, we believe that exceptional golf
                performance stems from the perfect harmony of technical skill,
                physical conditioning, mental fortitude, and strategic thinking.
              </p>
              <p className="text-noir-300 mb-6 font-manrope">
                Our holistic approach integrates cutting-edge technology with
                time-tested fundamentals, creating a learning environment where
                innovation meets tradition. We don't just teach golf – we
                transform players.
              </p>
              <button className="mt-4 holographic-btn group">
                Learn Our Philosophy <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-pulse" />
              </button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-neon-lg reveal-animation float-animation">
              <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Golf instructor working with student" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-20 bg-noir-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 reveal-animation">
            State-of-the-Art{' '}
            <span className="neon-text animate-neon-pulse">Facilities & Technology</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Indoor Performance Center',
            description: 'Climate-controlled hitting bays with TrackMan technology for year-round training.'
          }, {
            image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: '3D Motion Capture Studio',
            description: 'Advanced biomechanical analysis using the same technology used by PGA Tour professionals.'
          }, {
            image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Short Game Area',
            description: 'Specialized practice area for perfecting your putting, chipping, and bunker play.'
          }, {
            image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Custom Club Fitting Lab',
            description: 'Personalized equipment optimization to match your unique swing characteristics.'
          }, {
            image: 'https://images.unsplash.com/photo-1592919505780-303950717480?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Physical Performance Gym',
            description: 'Golf-specific fitness training to improve power, flexibility, and injury prevention.'
          }, {
            image: 'https://images.unsplash.com/photo-1560073744-7643b964bdf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'On-Course Teaching',
            description: "Real-world application of skills on Steyn City's championship course."
          }].map((facility, index) => <div key={index} className="group rounded-lg overflow-hidden glass-dark hover:shadow-neon-lg transition-all duration-300 reveal-animation">
                <div className="h-48 overflow-hidden">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-exo font-bold mb-3 text-noir-100">{facility.title}</h3>
                  <p className="text-noir-300 font-manrope">
                    {facility.description}
                  </p>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <button className="holographic-btn group">
              Explore All Facilities <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-20 bg-noir-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 reveal-animation">
            Comprehensive{' '}
            <span className="neon-text-gold animate-neon-pulse">Coaching Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: 'Junior Development',
            duration: 'Ages 7-18',
            description: 'Building fundamentals and fostering a love for the game in young players.',
            features: ['Age-appropriate skill development', 'Fun, engaging practice sessions', 'Junior tournament preparation', 'College golf pathway guidance']
          }, {
            title: 'Elite Player Program',
            duration: 'By application only',
            description: 'Intensive training for competitive players aiming for professional careers.',
            features: ['Comprehensive swing refinement', 'Advanced course management', 'Tournament preparation', 'Mental performance coaching']
          }, {
            title: 'Adult Improvement',
            duration: 'All skill levels',
            description: 'Customized coaching to help recreational players reach their potential.',
            features: ['Swing analysis and correction', 'Short game mastery', 'On-course playing lessons', 'Fitness integration']
          }, {
            title: 'Corporate Packages',
            duration: 'Groups of 4-20',
            description: 'Team-building events and group lessons for businesses and organizations.',
            features: ['Private group clinics', 'Friendly competitions', 'Networking opportunities', 'Customizable packages']
          }, {
            title: 'Short Game Mastery',
            duration: '6-week program',
            description: 'Focused training on the scoring aspects of golf to lower your handicap.',
            features: ['Putting stroke perfection', 'Chipping and pitching techniques', 'Bunker play confidence', 'Pressure situation practice']
          }, {
            title: 'One-on-One Elite Coaching',
            duration: 'Customized schedule',
            description: 'The ultimate personalized coaching experience with our master instructors.',
            features: ['Comprehensive game assessment', 'Personalized improvement plan', 'Regular progress tracking', '24/7 coach communication']
          }].map((program, index) => <div key={index} className="rounded-lg overflow-hidden glass-dark hover:shadow-neon-lg transition-all duration-300 p-6 reveal-animation">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-exo font-bold text-noir-100">{program.title}</h3>
                  <div className="flex items-center text-sm text-neon-cyan">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </div>
                </div>
                <p className="text-noir-300 font-manrope mb-4">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => <li key={i} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-neon-cyan mr-2 shrink-0" />
                      <span className="text-noir-300 font-manrope">{feature}</span>
                    </li>)}
                </ul>
                <button className="w-full px-4 py-2 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-noir-950 transition-all duration-300 rounded-lg font-medium">
                  Learn More
                </button>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <button className="holographic-btn group">
              View All Programs <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Coaches Section */}
      <section className="py-20 bg-noir-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 reveal-animation">
            Meet Our <span className="neon-text animate-neon-pulse">Expert Coaches</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            name: 'David Mitchell',
            title: 'Head Coach & PGA Professional',
            bio: 'Former tour player with 15+ years of coaching experience at the highest level.'
          }, {
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            name: 'Sarah Johnson',
            title: 'Junior Development Specialist',
            bio: 'Passionate about developing young talent with a background in sports psychology.'
          }, {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            name: 'Michael Chang',
            title: 'Technical Director',
            bio: 'Biomechanics expert who has worked with multiple major championship winners.'
          }].map((coach, index) => <div key={index} className="group rounded-lg overflow-hidden glass-dark hover:shadow-neon-lg transition-all duration-300 reveal-animation">
                <div className="h-64 overflow-hidden">
                  <img src={coach.image} alt={coach.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-exo font-bold text-noir-100">{coach.name}</h3>
                  <p className="text-neon-cyan mb-3 font-medium">{coach.title}</p>
                  <p className="text-noir-300 font-manrope">{coach.bio}</p>
                  <button className="mt-4 text-neon-cyan hover:text-neon-gold transition-colors duration-300 font-medium group">
                    View Profile <ArrowRight className="ml-2 h-4 w-4 inline group-hover:animate-pulse" />
                  </button>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <button className="holographic-btn group">
              Meet All Coaches <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-noir-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-16 reveal-animation">
            Success <span className="neon-text-gold animate-neon-pulse">Stories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            quote: "Element Golf Academy transformed my game. I've dropped 8 strokes from my handicap in just 6 months through their personalized coaching approach.",
            name: 'James Wilson',
            title: 'Handicap 7, Former 15',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }, {
            quote: 'The technology and expertise at Element is unmatched. Their 3D motion analysis identified issues in my swing that no one else could see.',
            name: 'Rebecca Chen',
            title: 'Club Champion',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }, {
            quote: "My son has flourished in their junior program. Not only has his golf improved, but he's learned valuable life skills like discipline and perseverance.",
            name: 'Thomas Brown',
            title: 'Parent of Junior Golfer',
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }, {
            quote: "After struggling with my short game for years, their Short Game Mastery program completely changed my approach. I'm now confident from anywhere around the green.",
            name: 'Michelle Park',
            title: 'Recreational Golfer',
            image: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }].map((testimonial, index) => <div key={index} className="p-6 rounded-lg glass-dark hover:shadow-neon-lg transition-all duration-300 reveal-animation">
                <div className="flex items-start mb-6">
                  <div className="text-4xl text-neon-cyan mr-4">"</div>
                  <p className="text-noir-300 font-manrope italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-exo font-bold text-noir-100">{testimonial.name}</h4>
                    <p className="text-sm text-neon-cyan font-medium">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <button className="holographic-btn group">
              Read More Stories <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-noir-950 to-noir-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 reveal-animation">
            Ready to Transform Your Golf Game?
          </h2>
          <p className="text-lg text-noir-300 font-manrope mb-8 max-w-2xl mx-auto reveal-animation">
            Join Element Golf Academy today and experience the perfect blend of
            cutting-edge technology and expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation">
            <button className="holographic-btn group">
              <Calendar className="mr-2 group-hover:animate-pulse" size={20} />
              Book Your First Session
            </button>
            <button className="px-8 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-noir-950 transition-all duration-300 rounded-lg font-exo font-semibold group">
              <Target className="mr-2 group-hover:animate-pulse" size={20} />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>;
}

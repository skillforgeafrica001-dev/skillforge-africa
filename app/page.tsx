import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-bg to-card-dark text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-glowy-blue">SkillForge Africa</div>
          <div className="hidden md:flex gap-8">
            <Link href="#features" className="hover:text-glowy-blue transition">Features</Link>
            <Link href="#courses" className="hover:text-glowy-blue transition">Courses</Link>
            <Link href="#about" className="hover:text-glowy-blue transition">About</Link>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-glowy-blue to-blue-400 bg-clip-text text-transparent">
          Learn Skills. Build Income. Change Your Future.
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of African professionals mastering digital skills with structured courses, hands-on projects, and real income opportunities.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/auth/signup">Get Started Free</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#courses">Explore Courses</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose SkillForge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert-Led Courses',
                description: 'Learn from industry professionals with real-world experience'
              },
              {
                title: 'Hands-On Projects',
                description: 'Build a portfolio with real projects that employers love'
              },
              {
                title: 'Income Opportunities',
                description: 'Connect with businesses and earn while you learn'
              },
              {
                title: 'Community Support',
                description: 'Join a thriving community of African professionals'
              },
              {
                title: 'Flexible Learning',
                description: 'Learn at your own pace on any device'
              },
              {
                title: 'Certifications',
                description: 'Get recognized credentials to boost your career'
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-lg border border-gray-700 hover:border-glowy-blue transition bg-gradient-to-br from-transparent to-glowy-blue/5">
                <h3 className="text-xl font-semibold mb-3 text-glowy-blue">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
        <p className="text-xl text-gray-400 mb-8">Start your journey today and join thousands of successful learners</p>
        <Button size="lg" asChild className="text-lg px-8 py-6">
          <Link href="/auth/signup">Start Learning Now</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 bg-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-glowy-blue mb-4">SkillForge Africa</h4>
              <p className="text-gray-400">Empowering African professionals with digital skills</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-glowy-blue transition">Courses</Link></li>
                <li><Link href="#" className="hover:text-glowy-blue transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-glowy-blue transition">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-glowy-blue transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-glowy-blue transition">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-glowy-blue transition">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-glowy-blue transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-glowy-blue transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillForge Africa. All rights reserved. Made with ❤️ in Africa for Africa</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeToNextDistribution, setTimeToNextDistribution] = useState("");
  const [timeToNextHourlyDistribution, setTimeToNextHourlyDistribution] = useState("");

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date();
      
      // Calculate next 2-hour distribution (for new Shell holders)
      const nextTwoHour = new Date();
      const currentHour = now.getHours();
      const nextEvenHour = Math.ceil(currentHour / 2) * 2;
      nextTwoHour.setHours(nextEvenHour, 0, 0, 0);
      if (nextTwoHour <= now) {
        nextTwoHour.setHours(nextTwoHour.getHours() + 2);
      }
      
      // Calculate next hourly distribution (for Company holders)
      const nextHour = new Date();
      nextHour.setHours(now.getHours() + 1, 0, 0, 0);
      if (nextHour <= now) {
        nextHour.setHours(nextHour.getHours() + 1);
      }
      
      const timeDiff2Hour = nextTwoHour.getTime() - now.getTime();
      const timeDiffHour = nextHour.getTime() - now.getTime();
      
      const formatTime = (diff: number) => {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return `${hours}h ${minutes}m ${seconds}s`;
      };
      
      setTimeToNextDistribution(formatTime(timeDiff2Hour));
      setTimeToNextHourlyDistribution(formatTime(timeDiffHour));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-500">
        <div className="flex items-center gap-3">
          <Image
            src="/Untitled design (51).png"
            alt="Shell Logo"
            width={40}
            height={40}
            className="opacity-90"
          />
          <div>
            <h1 className="text-xl font-bold">Shell Capital</h1>
            <p className="text-sm text-gray-400">Powered by Company</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://x.com/TheShellCapital" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#1a1a1a] py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-[#1a1a1a] rounded-full px-6 py-3 mb-8">
            <Image
              src="/Untitled design (51).png"
              alt="Shell Token"
              width={32}
              height={32}
              className="opacity-90"
            />
            <span className="text-lg font-semibold">$SHELL</span>
            <span className="text-sm text-gray-400">Powered by Company</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            Earn Real Rewards
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Just by Holding
            </span>
            <br />
            $SHELL
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Automatically receive treasury rewards every hour for Company holders, 
            and LP rewards every 2 hours for new Shell holders
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <button 
              onClick={() => document.getElementById('distribution-system')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
            >
              Start Earning SHELL Now
            </button>
            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
            >
              Learn About SHELL
            </button>
          </div>

          {/* Logo with pulse animation */}
          <div className="shady-pulse">
            <Image
              src="/Untitled design (51).png"
              alt="Shell Company Logo"
              width={200}
              height={200}
              className="mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">The Origin Story</h2>
            <div className="bg-[#121212] rounded-xl p-8 border border-gray-600 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                🧵 Company began when someone fat-fingered <span className="text-orange-400 font-semibold">$1.6M</span> into our coin.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                That single moment birthed one of the most efficient, accidentally-intentional shady operations on-chain.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The rally cooled, as all things do, but the ecosystem stayed alive, and the treasury kept printing fees.
              </p>
              <div className="bg-[#1a1a1a] rounded-lg p-6 border-l-4 border-orange-500">
                <p className="text-lg text-white leading-relaxed mb-4">
                  <span className="font-semibold">Rather than force liquidity into a chart that's already leveled out, we're doing what actually makes sense:</span>
                </p>
                <p className="text-lg text-orange-300 leading-relaxed">
                  We're launching a Shell Company Coin — a fresh vehicle to redistribute rewards and revive the momentum, without diluting the core.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-900 bg-opacity-30 rounded-lg p-6 border border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-purple-300">This isn't a pivot.</h3>
                <p className="text-gray-300">It's the next planned phase.</p>
              </div>
              <div className="bg-green-900 bg-opacity-30 rounded-lg p-6 border border-green-600">
                <h3 className="text-xl font-bold mb-3 text-green-300">We're not reviving something old.</h3>
                <p className="text-gray-300">We're weaponizing what we built.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Three simple steps to start earning rewards through $SHELL holdings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-[#1a1a1a] rounded-xl p-8 text-center border border-gray-600 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Hold $SHELL Tokens</h3>
              <p className="text-gray-400">Purchase and hold $SHELL in your wallet. No staking or locking required - just hold and earn</p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#1a1a1a] rounded-xl p-8 text-center border border-gray-600 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Automatic Distribution</h3>
              <p className="text-gray-400">Receive rewards automatically - hourly for Company holders, every 2 hours for new holders</p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#1a1a1a] rounded-xl p-8 text-center border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div className="w-16 h-16 bg-purple-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Receive Shell Rewards</h3>
              <p className="text-gray-400">Get Shell tokens automatically every distribution. The more $SHELL you hold, the more you receive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution System */}
      <section id="distribution-system" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Distribution System</h2>
            <p className="text-xl text-gray-400">Dual reward system for Company and new Shell holders</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Company Holders */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-8 border border-purple-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">$COMPANY Holders</h3>
                  <p className="text-purple-200">Snapshotted July 1st, 2025 at 12:00 AM UTC</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Hourly airdrops from LP rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Paid directly from Company treasury</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Ongoing buybacks from accumulated fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Compounding impact for early holders</span>
                </div>
              </div>

              <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-200">Next hourly airdrop:</span>
                  <span className="font-mono text-lg font-bold text-white">{timeToNextHourlyDistribution}</span>
                </div>
              </div>
            </div>

            {/* New Shell Holders */}
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-8 border border-green-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">New $SHELL Holders</h3>
                  <p className="text-green-200">Join anytime and start earning</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>LP rewards every 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Immediate eligibility upon purchase</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Fresh momentum vehicle</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Compound growth opportunities</span>
                </div>
              </div>

              <div className="bg-green-800 bg-opacity-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-200">Next 2-hour distribution:</span>
                  <span className="font-mono text-lg font-bold text-white">{timeToNextDistribution}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose $SHELL?</h2>
            <p className="text-xl text-gray-400">Revolutionary features that make earning rewards as simple as holding tokens</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">24/7 Distribution</h3>
              <p className="text-gray-400 text-sm">Automated rewards around the clock</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">No Claiming Required</h3>
              <p className="text-gray-400 text-sm">Rewards appear directly in your wallet</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Transparent</h3>
              <p className="text-gray-400 text-sm">All distributions publicly verifiable</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Low Fees</h3>
              <p className="text-gray-400 text-sm">Minimal transaction costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-16 bg-red-900 bg-opacity-20 border-t border-red-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-300">Investment Structure Notice</h3>
            </div>
            <p className="text-red-200 text-lg leading-relaxed">
              This reward system operates on a <span className="font-semibold">pyramid-like structure</span> where early participants 
              benefit from new participant contributions. While designed for sustainability, participants should understand 
              the inherent risks and only invest what they can afford to lose. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] border-t border-gray-700 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/Untitled design (51).png"
                alt="Shell Logo"
                width={32}
                height={32}
                className="opacity-80"
              />
              <div>
                <h3 className="font-bold">Shell Capital</h3>
                <p className="text-sm text-gray-400">Weaponizing what we built</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Shell Capital. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

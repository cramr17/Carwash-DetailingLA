'use client';
import Image from "next/image";
import { pageContent } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { ServiceAreaPopup } from "@/components/service-area-popup";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* ===== Header ===== */}
      <header className="absolute top-0 left-0 w-full z-20 p-4 bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#gallery" className="text-white hover:text-blue-400 transition-colors">Gallery</a>
            <a href="#service-areas" className="text-white hover:text-blue-400 transition-colors">Service Areas</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Hours</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image 
               src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               fill
               style={{ objectFit: 'cover' }}
               className="opacity-30" 
               alt="Luxury car background"
               priority
          />
        </div>
        
        <div className="relative z-10 hero-gradient w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
             <div className="w-40 h-40 mb-4 flex items-center justify-center">
              <Image src="/images/ic-logo.png" alt="Carwash & Detailing LA Logo" width={160} height={160} className="rounded-full" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-4">
            Professional Automotive Detailing,<br className="hidden md:block" /> <span className="text-blue-400">At-Home Convenience</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
            Say goodbye to waiting in line. We bring a premium auto detailing experience to your home or office. Using expert techniques and the best products, we'll have your car looking immaculate while you go about your day. Book now and get your time back.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://carwashdetailingla.square.site" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="default">Book Appointment</Button>
              </a>
            </div>

            <div className="flex flex-col items-center gap-4 mb-8">
                <p className="text-blue-400 uppercase tracking-widest">Coming soon on</p>
                <p className="text-gray-300 text-sm max-w-md mb-2">To book appointments faster, we are preparing our apps on these platforms.</p>
                <div className="flex items-center justify-center gap-4">
                    <a href="https://apps.apple.com/us/app/square-appointments/id914741346" aria-label="Download on the App Store" target="_blank" rel="noopener noreferrer">
                        <Image src="https://assets.stickpng.com/images/5a902db97f96951c82922874.png" alt="Download on the App Store" width={120} height={40} />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.squareup.appointments" aria-label="Get it on Google Play" target="_blank" rel="noopener noreferrer">
                        <Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width={135} height={40} style={{ height: 'auto' }} />
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-400">
              <p>Open until 5:00 pm</p>
            </div>
        </div>
      </section>

      {/* ===== Offerings Section ===== */}
      <section id="offerings" className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white uppercase mb-4">Explore Our Offerings</h2>
            <div className="flex justify-center items-center gap-6 text-lg text-gray-300">
                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            </div>
        </div>
      </section>


      {/* ===== Wash Packages Section ===== */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-white uppercase">Wash Packages</h2>
                <p className="mt-4 text-lg text-gray-400">Choose the perfect plan to leave your car spotless.</p>
                <p className="mt-2 text-sm text-yellow-400">Please note: Service times are approximate and may vary due to traffic conditions in the LA area.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {pageContent.washPackages.map((pkg, index) => (
                <div key={index} className="glass-card rounded-xl p-8 flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-blue-300 h-16">{pkg.title}</h3>
                    <p className="text-4xl font-black my-4 text-white">{pkg.price}</p>
                    <p className="text-gray-400 mb-4">{pkg.duration}</p>
                    <p className="text-gray-300 flex-grow mb-6">{pkg.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* ===== Exterior Add-ons Section ===== */}
      <section id="exterior-addons" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white uppercase">Exterior Services (Add-ons)</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pageContent.exteriorAddons.map((service, index) => (
                <Card key={index} className="glass-card border-blue-900/50">
                  <CardHeader>
                    <CardTitle className="text-blue-300 text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                    <p className="text-white font-bold">{service.price} <span className="text-sm font-normal text-gray-400">({service.duration})</span></p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="h-96 lg:h-[600px] w-full relative rounded-lg overflow-hidden glass-card">
              <Image src="https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=2070&auto=format&fit=crop" alt="Exterior detailing" fill style={{objectFit: 'cover'}} data-ai-hint="car exterior" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Interior Add-ons Section ===== */}
      <section id="interior-addons" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase">Interior Services (Add-ons)</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="h-96 lg:h-[600px] w-full relative rounded-lg overflow-hidden glass-card">
              <Image 
                alt="Interior detailing" 
                fill 
                style={{ objectFit: 'cover' }} 
                data-ai-hint="car interior" 
                src="/images/interior-porche.webp"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pageContent.interiorAddons.map((service, index) => (
                <Card key={index} className="glass-card border-blue-900/50">
                  <CardHeader>
                    <CardTitle className="text-blue-300 text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                    <p className="text-white font-bold">{service.price} <span className="text-sm font-normal text-gray-400">({service.duration})</span></p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== Gallery Section ===== */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-white uppercase">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400">Results you can see and feel. Your car is our best calling card.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/exterior-wash.jpg" alt="IMAGE_DESCRIPTION_1"/>
                    </div>
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/urus.jpg" alt="IMAGE_DESCRIPTION_2"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/jaguar.jpg" alt="IMAGE_DESCRIPTION_3"/>
                    </div>
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/interior-jaguar.jpg" alt="IMAGE_DESCRIPTION_4"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/interior-mercedes.jpg" alt="IMAGE_DESCRIPTION_5"/>
                    </div>
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/interior-back-mercedes.jpg" alt="IMAGE_DESCRIPTION_6"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/truck-shine.jpg" alt="IMAGE_DESCRIPTION_7"/>
                    </div>
                    <div className="w-full h-80 relative rounded-lg overflow-hidden">
                        <Image fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-auto max-w-full rounded-lg transform hover:scale-105 transition-transform" src="/images/front-truck.jpg" alt="IMAGE_DESCRIPTION_8"/>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ===== Service Areas Section ===== */}
      <ServiceAreaPopup>
        <section id="service-areas" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-white uppercase">Our Service Areas</h2>
                  <p className="mt-4 text-lg text-gray-400">We proudly serve the following cities and beach communities:</p>
              </div>
              <div className="text-center">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg text-gray-300">
                  {pageContent.serviceAreas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
          </div>
        </section>
      </ServiceAreaPopup>

      {/* ===== Contact & Hours Section ===== */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl font-black text-white uppercase mb-8">Hours</h2>
                <div className="space-y-2 text-lg text-gray-300 max-w-xs mx-auto">
                  {pageContent.hours.map((day, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{day.day}</span>
                      <span>{day.time}</span>
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </section>
      
      {/* ===== Footer ===== */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center mb-4 text-white">
                <Image src="/images/ic-logo.png" alt="Carwash &amp; Detailing LA Logo" width={48} height={48} className="rounded-full" />
            </div>
            <p className="text-gray-400">Keep your car clean</p>
            <p className="mt-2 text-gray-500">© 2025 Carwash &amp; Detailing LA. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-6">
                <a href="https://www.instagram.com/mcarwashdetailingla1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363.416 2.427.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.86.399-1.249.788-.389.389-.607.782-.788 1.249-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.86.788 1.249.389.389.782.607 1.249.788.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467.182.86-.399 1.249-.788.389.389.607.782.788-1.249.137-.353.3-.882-.344-1.857.047-1.023.058-1.351-.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.788-1.249 3.097 3.097 0 00-1.249-.788c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61580454547065" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <div className="flex items-center gap-2">
                    <img src="https://img.icons8.com/color/48/cash-app.png" alt="CashApp" className="h-6 w-6" />
                    <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" className="h-6 w-6" />
                    <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" className="h-6 w-6" />
                    <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 w-6" />
                    <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 w-6" />
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}

    

    
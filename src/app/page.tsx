'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Users, 
  Award, 
  Building,
  Truck,
  HardHat,
  Shield,
  Target,
  ChevronRight,
  Menu,
  X,
  Wrench
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Konstruksi Jalan Raya",
      description: "Pembangunan jalan raya dengan standar kualitas tinggi dan teknologi modern"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Pengaspalan Jalan",
      description: "Layanan pengaspalan profesional untuk jalan kota dan pedesaan"
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Infrastruktur Jembatan",
      description: "Konstruksi jembatan dan struktur penunjang jalan yang kokoh"
    },
    {
      icon: <HardHat className="w-8 h-8 text-blue-600" />,
      title: "Drainase Jalan",
      description: "Sistem drainase yang efektif untuk menjaga kualitas jalan"
    }
  ]

  const achievements = [
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      value: "50+",
      label: "Proyek Selesai"
    },
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      value: "10+",
      label: "Tahun Pengalaman"
    },
    {
      icon: <Building className="w-6 h-6 text-orange-500" />,
      value: "100%",
      label: "Kepuasan Klien"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      value: "SNI",
      label: "Standar Nasional"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/company-logo.png" 
                alt="PT WILDHAN BANGUN SEJAHTERA" 
                className="w-10 h-10 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">PT WILDHAN BANGUN SEJAHTERA</h1>
                <p className="text-xs text-gray-600">Konstruksi Jalan Raya</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Tentang Kami
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Kontak
              </button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Beranda
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Layanan
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Tentang Kami
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Kontak
                </button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90 z-10"></div>
        <img 
          src="/hero-banner.png" 
          alt="Road Construction" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white px-4 py-2">
              Profesional & Terpercaya
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PT WILDHAN BANGUN SEJAHTERA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Solusi Terdepan untuk Konstruksi Jalan Raya Berkualitas
            </p>
            <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">
              Perusahaan konstruksi terkemuka di Gorontalo yang berpengalaman dalam pembangunan 
              infrastruktur jalan raya dengan standar kualitas tertinggi dan teknologi modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Konsultasi Gratis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
                onClick={() => scrollToSection('services')}
              >
                Lihat Layanan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Layanan Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Konstruksi Profesional
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi jalan raya dengan standar kualitas 
              tertinggi dan didukung oleh tim profesional berpengalaman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full inline-flex">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">Tentang Kami</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">PT WILDHAN BANGUN SEJAHTERA</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                PT WILDHAN BANGUN SEJAHTERA adalah perusahaan konstruksi jalan raya yang 
                berbasis di Gorontalo. Dengan pengalaman lebih dari 10 tahun, kami telah 
                menyelesaikan berbagai proyek infrastruktur penting di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Kami berkomitmen untuk memberikan hasil kerja berkualitas tinggi, 
                tepat waktu, dan dengan standar keselamatan terbaik untuk setiap proyek.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Berkualitas Tinggi</h4>
                    <p className="text-gray-600">Standar SNI dan internasional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tepat Waktu</h4>
                    <p className="text-gray-600">Pengelolaan proyek efisien</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="mx-auto mb-3 p-3 bg-orange-50 rounded-full inline-flex">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500 text-white">Hubungi Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Mengerjakan Proyek Anda
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Hubungi kami hari ini untuk konsultasi gratis dan penawaran terbaik untuk 
              proyek konstruksi jalan raya Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                <CardTitle className="text-white">Telepon</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100">0852-8570-3526</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                <CardTitle className="text-white">Alamat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100 text-sm">
                  Jl. Selayar, Kel. Liluwo<br />
                  Kec. Kota Tengah, Kota Gorontalo<br />
                  Provinsi Gorontalo
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                <CardTitle className="text-white">Jam Kerja</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100">
                  Senin - Jumat: 08:00 - 17:00<br />
                  Sabtu: 08:00 - 12:00
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              onClick={() => window.open('tel:085285703526')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/company-logo.png" 
                  alt="PT WILDHAN BANGUN SEJAHTERA" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-xl font-bold">PT WILDHAN BANGUN SEJAHTERA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan konstruksi jalan raya terkemuka di Gorontalo yang 
                berkomitmen memberikan layanan infrastruktur berkualitas tinggi.
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-blue-600">Konstruksi Jalan</Badge>
                <Badge className="bg-orange-500">Infrastruktur</Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konstruksi Jalan Raya</li>
                <li>Pengaspalan Jalan</li>
                <li>Infrastruktur Jembatan</li>
                <li>Drainase Jalan</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0852-8570-3526</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Gorontalo</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PT WILDHAN BANGUN SEJAHTERA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => scrollToSection('privacy')}
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Section (Hidden by default) */}
      <section id="privacy" className="py-20 bg-white hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              PT WILDHAN BANGUN SEJAHTERA ("kami") berkomitmen untuk melindungi privasi Anda. 
              Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan 
              melindungi informasi pribadi Anda.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Informasi yang Kami Kumpulkan</h3>
            <p className="text-gray-600 mb-4">
              Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon, 
              dan informasi lain yang relevan untuk keperluan bisnis kami.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Penggunaan Informasi</h3>
            <p className="text-gray-600 mb-4">
              Informasi yang kami kumpulkan digunakan untuk menyediakan layanan kami, 
              menghubungi Anda mengenai proyek, dan meningkatkan layanan kami.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Keamanan Data</h3>
            <p className="text-gray-600 mb-4">
              Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi 
              pribadi Anda dari akses tidak sah, penggunaan, atau pengungkapan.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section (Hidden by default) */}
      <section id="terms" className="py-20 bg-white hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Selamat datang di PT WILDHAN BANGUN SEJAHTERA. Dengan menggunakan layanan kami, 
              Anda setuju untuk mematuhi syarat dan ketentuan berikut.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Layanan Kami</h3>
            <p className="text-gray-600 mb-4">
              Kami menyediakan layanan konstruksi jalan raya dan infrastruktur terkait. 
              Semua layanan dilaksanakan sesuai dengan standar kualitas yang berlaku.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Kewajiban Klien</h3>
            <p className="text-gray-600 mb-4">
              Klien bertanggung jawab untuk menyediakan informasi yang akurat, 
              izin yang diperlukan, dan pembayaran tepat waktu sesuai kesepakatan.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pembayaran</h3>
            <p className="text-gray-600 mb-4">
              Syarat pembayaran akan disepakati dalam kontrak proyek. 
              Pembayaran harus dilakukan sesuai dengan jadwal yang telah ditentukan.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Penyelesaian Sengketa</h3>
            <p className="text-gray-600 mb-4">
              Setiap sengketa akan diselesaikan melalui negosiasi terlebih dahulu. 
              Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui hukum yang berlaku.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
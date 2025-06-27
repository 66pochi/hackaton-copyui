import React, { useState, useEffect } from 'react';
import { Copy, Check, Eye, Code, Grid3X3, List, Layers, MessageSquare, LogIn, ChevronDown, Menu, X, Sparkles, Zap, Shield, Rocket, Star, Heart, Users, Globe, BookOpen, HelpCircle, Mail, Search, Send, User, Phone, MapPin, Calendar, Clock, Download, Upload, Filter, SortAsc as Sort, ArrowLeft, ArrowRight, Plus, Minus, Edit, Trash2, Save, Ambulance as Cancel, Play, Pause, Volume2, VolumeX, Wifi, Battery, Signal, Home, Folder, File, Image, Video, Music, Archive, Tag, Flag, Bookmark, Share, Link, ExternalLink, Maximize, Minimize, RotateCcw, RefreshCw, ZoomIn, ZoomOut, Move, Crop, Scissors, Clipboard, Award, Target, TrendingUp, Activity, BarChart, PieChart, DollarSign, ShoppingCart, CreditCard, Package, Truck, Navigation, Compass, Camera, Mic, Speaker, Headphones, Monitor, Smartphone, Tablet, Laptop, LampDesk as Desktop, Server, Database, Cloud, Bluetooth, Usb, HardDrive, Cpu, MemoryStick, Power, Sun, Moon, CloudRain, CloudSnow, Wind, Thermometer, Droplets, EyeOff, Lock, Unlock, Key, AlertTriangle, AlertCircle, Info, CheckCircle, XCircle, MessageCircle, Timer, Watch as Stopwatch, AlarmClock, Watch, Hourglass, History, Nut as Cut, Cast as Paste, PenTool, Brush, Palette, Pipette, Ruler, Grid, Layout, Move3D, RotateCw, FlipHorizontal, FlipVertical, Maximize2, Minimize2, Focus, Aperture, Settings, Github } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollProgress } from './components/ScrollProgress';
import { ColorPicker } from './components/ColorPicker';
import { CodeBlock } from './components/CodeBlock';
import { RippleButton } from './components/RippleButton';
import { Tooltip } from './components/Tooltip';
import { FreeUILogo } from './components/FreeUILogo';
import { BoltLogo } from './components/BoltLogo';

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
  preview: React.ReactNode;
  color: string;
  generateCode: (color: string) => string;
  generatePreview: (color: string) => React.ReactNode;
  hasColorPicker?: boolean;
}

const FreeUI: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [componentColors, setComponentColors] = useState<{ [key: string]: string }>({});

  const categories = ['All', 'Buttons', 'Cards', 'Forms', 'Navigation', 'Layout', 'Data Display'];

  const updateComponentColor = (componentId: string, newColor: string) => {
    setComponentColors(prev => ({
      ...prev,
      [componentId]: newColor
    }));
  };

  const getComponentColor = (componentId: string, defaultColor: string) => {
    return componentColors[componentId] || defaultColor;
  };

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const components: Component[] = [
    // Buttons Category (5 components)
    {
      id: 'gradient-button',
      name: 'Gradient Button',
      category: 'Buttons',
      description: 'A beautiful gradient button with hover effects',
      color: 'purple',
      hasColorPicker: true,
      generateCode: (color: string) => `<button className="px-6 py-3 bg-gradient-to-r from-${color}-500 to-${color === 'purple' ? 'pink' : color}-500 text-white font-semibold rounded-lg shadow-lg hover:from-${color}-600 hover:to-${color === 'purple' ? 'pink' : color}-600 transform hover:scale-105 transition-all duration-200">
  Click Me
</button>`,
      generatePreview: (color: string) => (
        <button className={`px-6 py-3 bg-gradient-to-r from-${color}-500 to-${color === 'purple' ? 'pink' : color}-500 text-white font-semibold rounded-lg shadow-lg hover:from-${color}-600 hover:to-${color === 'purple' ? 'pink' : color}-600 transform hover:scale-105 transition-all duration-200`}>
          Click Me
        </button>
      ),
      code: '',
      preview: null
    },
    {
      id: 'neon-button',
      name: 'Neon Button',
      category: 'Buttons',
      description: 'A glowing neon-style button',
      color: 'cyan',
      hasColorPicker: true,
      generateCode: (color: string) => `<button className="px-6 py-3 bg-${color}-500 text-white font-bold rounded-lg shadow-lg hover:shadow-${color}-500/50 hover:shadow-2xl transition-all duration-300 border-2 border-${color}-400 hover:bg-${color}-400">
  Neon Glow
</button>`,
      generatePreview: (color: string) => (
        <button className={`px-6 py-3 bg-${color}-500 text-white font-bold rounded-lg shadow-lg hover:shadow-${color}-500/50 hover:shadow-2xl transition-all duration-300 border-2 border-${color}-400 hover:bg-${color}-400`}>
          Neon Glow
        </button>
      ),
      code: '',
      preview: null
    },
    {
      id: 'glass-button',
      name: 'Glass Button',
      category: 'Buttons',
      description: 'A modern glassmorphism button',
      color: 'blue',
      hasColorPicker: true,
      generateCode: (color: string) => `<button className="px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-${color}-600 font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 shadow-lg">
  Glass Effect
</button>`,
      generatePreview: (color: string) => (
        <button className={`px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-${color}-600 font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 shadow-lg`}>
          Glass Effect
        </button>
      ),
      code: '',
      preview: null
    },
    {
      id: 'loading-button',
      name: 'Loading Button',
      category: 'Buttons',
      description: 'Button with loading spinner animation',
      color: 'green',
      hasColorPicker: true,
      generateCode: (color: string) => `<button className="px-6 py-3 bg-${color}-500 text-white font-semibold rounded-lg hover:bg-${color}-600 transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50">
  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  <span>Loading...</span>
</button>`,
      generatePreview: (color: string) => (
        <button className={`px-6 py-3 bg-${color}-500 text-white font-semibold rounded-lg hover:bg-${color}-600 transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50`}>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </button>
      ),
      code: '',
      preview: null
    },
    {
      id: 'icon-button',
      name: 'Icon Button',
      category: 'Buttons',
      description: 'Button with icon and text',
      color: 'orange',
      hasColorPicker: true,
      generateCode: (color: string) => `<button className="px-6 py-3 bg-${color}-500 text-white font-semibold rounded-lg hover:bg-${color}-600 transition-colors duration-200 flex items-center space-x-2">
  <Download className="w-5 h-5" />
  <span>Download</span>
</button>`,
      generatePreview: (color: string) => (
        <button className={`px-6 py-3 bg-${color}-500 text-white font-semibold rounded-lg hover:bg-${color}-600 transition-colors duration-200 flex items-center space-x-2`}>
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
      ),
      code: '',
      preview: null
    },

    // Cards Category (5 components)
    {
      id: 'product-card',
      name: 'Product Card',
      category: 'Cards',
      description: 'Modern product showcase card',
      color: 'indigo',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <div className="h-48 bg-gradient-to-br from-${color}-400 to-purple-500"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Product Name</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">Beautiful product description here.</p>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-${color}-600">$99</span>
      <button className="px-4 py-2 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className={`h-48 bg-gradient-to-br from-${color}-400 to-purple-500`}></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Product Name</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Beautiful product description here.</p>
            <div className="flex items-center justify-between">
              <span className={`text-2xl font-bold text-${color}-600`}>$99</span>
              <button className={`px-4 py-2 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition-colors`}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'profile-card',
      name: 'Profile Card',
      category: 'Cards',
      description: 'User profile card with avatar',
      color: 'pink',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
  <div className="w-24 h-24 bg-gradient-to-br from-${color}-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
    <User className="w-12 h-12 text-white" />
  </div>
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">John Doe</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-4">Frontend Developer</p>
  <button className="px-6 py-2 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition-colors">
    Follow
  </button>
</div>`,
      generatePreview: (color: string) => (
        <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className={`w-24 h-24 bg-gradient-to-br from-${color}-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center`}>
            <User className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">John Doe</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Frontend Developer</p>
          <button className={`px-6 py-2 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition-colors`}>
            Follow
          </button>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'stats-card',
      name: 'Stats Card',
      category: 'Cards',
      description: 'Statistics display card',
      color: 'emerald',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-${color}-500">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400">Total Sales</p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">$12,345</p>
      <p className="text-sm text-${color}-600">+12% from last month</p>
    </div>
    <div className="p-3 bg-${color}-100 dark:bg-${color}-900/30 rounded-full">
      <TrendingUp className="w-8 h-8 text-${color}-600" />
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-${color}-500`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Sales</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$12,345</p>
              <p className={`text-sm text-${color}-600`}>+12% from last month</p>
            </div>
            <div className={`p-3 bg-${color}-100 dark:bg-${color}-900/30 rounded-full`}>
              <TrendingUp className={`w-8 h-8 text-${color}-600`} />
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'feature-card',
      name: 'Feature Card',
      category: 'Cards',
      description: 'Feature highlight card',
      color: 'blue',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
  <div className="w-12 h-12 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-4">
    <Zap className="w-6 h-6 text-${color}-600" />
  </div>
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fast Performance</h3>
  <p className="text-gray-600 dark:text-gray-300">Lightning-fast loading times and smooth interactions.</p>
</div>`,
      generatePreview: (color: string) => (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className={`w-12 h-12 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-4`}>
            <Zap className={`w-6 h-6 text-${color}-600`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fast Performance</h3>
          <p className="text-gray-600 dark:text-gray-300">Lightning-fast loading times and smooth interactions.</p>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'pricing-card',
      name: 'Pricing Card',
      category: 'Cards',
      description: 'Pricing plan card',
      color: 'purple',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-${color}-200 dark:border-${color}-800 relative">
  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
    <span className="bg-${color}-500 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</span>
  </div>
  <div className="text-center">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro Plan</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold text-${color}-600">$29</span>
      <span className="text-gray-600 dark:text-gray-400">/month</span>
    </div>
    <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
      <li>✓ Unlimited projects</li>
      <li>✓ Priority support</li>
      <li>✓ Advanced features</li>
    </ul>
    <button className="w-full px-6 py-3 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition-colors">
      Get Started
    </button>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-${color}-200 dark:border-${color}-800 relative`}>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className={`bg-${color}-500 text-white px-3 py-1 rounded-full text-sm font-medium`}>Popular</span>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro Plan</h3>
            <div className="mb-4">
              <span className={`text-4xl font-bold text-${color}-600`}>$29</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
              <li>✓ Unlimited projects</li>
              <li>✓ Priority support</li>
              <li>✓ Advanced features</li>
            </ul>
            <button className={`w-full px-6 py-3 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition-colors`}>
              Get Started
            </button>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },

    // Forms Category (5 components) - Some without color picker
    {
      id: 'modern-input',
      name: 'Modern Input',
      category: 'Forms',
      description: 'Floating label input field',
      color: 'blue',
      hasColorPicker: false,
      generateCode: (color: string) => `<div className="relative">
  <input
    type="text"
    id="floating-input"
    className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:border-blue-500 focus:outline-none transition-colors"
    placeholder=" "
  />
  <label
    htmlFor="floating-input"
    className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm transition-all"
  >
    Enter your name
  </label>
</div>`,
      generatePreview: (color: string) => (
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            id="floating-input"
            className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:border-blue-500 focus:outline-none transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="floating-input"
            className="absolute left-4 -top-2.5 px-2 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm transition-all"
          >
            Enter your name
          </label>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'toggle-switch',
      name: 'Toggle Switch',
      category: 'Forms',
      description: 'Animated toggle switch',
      color: 'green',
      hasColorPicker: false,
      generateCode: (color: string) => `<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>`,
      generatePreview: (color: string) => (
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label>
      ),
      code: '',
      preview: null
    },
    {
      id: 'search-input',
      name: 'Search Input',
      category: 'Forms',
      description: 'Search input with icon',
      color: 'purple',
      hasColorPicker: false,
      generateCode: (color: string) => `<div className="relative max-w-md">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <Search className="h-5 w-5 text-gray-400" />
  </div>
  <input
    type="text"
    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
    placeholder="Search..."
  />
</div>`,
      generatePreview: (color: string) => (
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
            placeholder="Search..."
          />
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'select-dropdown',
      name: 'Select Dropdown',
      category: 'Forms',
      description: 'Custom styled select dropdown',
      color: 'indigo',
      hasColorPicker: false,
      generateCode: (color: string) => `<div className="relative max-w-md">
  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none cursor-pointer">
    <option>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <ChevronDown className="h-5 w-5 text-gray-400" />
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="relative max-w-md">
          <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none cursor-pointer">
            <option>Choose an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'checkbox-group',
      name: 'Checkbox Group',
      category: 'Forms',
      description: 'Styled checkbox group',
      color: 'pink',
      hasColorPicker: false,
      generateCode: (color: string) => `<div className="space-y-3">
  <label className="flex items-center space-x-3 cursor-pointer">
    <input
      type="checkbox"
      className="w-5 h-5 text-pink-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
    />
    <span className="text-gray-900 dark:text-gray-300">Option 1</span>
  </label>
  <label className="flex items-center space-x-3 cursor-pointer">
    <input
      type="checkbox"
      className="w-5 h-5 text-pink-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
    />
    <span className="text-gray-900 dark:text-gray-300">Option 2</span>
  </label>
  <label className="flex items-center space-x-3 cursor-pointer">
    <input
      type="checkbox"
      className="w-5 h-5 text-pink-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
    />
    <span className="text-gray-900 dark:text-gray-300">Option 3</span>
  </label>
</div>`,
      generatePreview: (color: string) => (
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-pink-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
            />
            <span className="text-gray-900 dark:text-gray-300">Option 1</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-pink-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
            />
            <span className="text-gray-900 dark:text-gray-300">Option 2</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-pink-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
            />
            <span className="text-gray-900 dark:text-gray-300">Option 3</span>
          </label>
        </div>
      ),
      code: '',
      preview: null
    },

    // Navigation Category (5 components)
    {
      id: 'breadcrumb',
      name: 'Breadcrumb',
      category: 'Navigation',
      description: 'Navigation breadcrumb trail',
      color: 'blue',
      hasColorPicker: true,
      generateCode: (color: string) => `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-${color}-600 dark:hover:text-${color}-400">
        <Home className="w-4 h-4 mr-2" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <ArrowRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-${color}-600 dark:hover:text-${color}-400 md:ml-2">
          Library
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <ArrowRight className="w-4 h-4 text-gray-400" />
        <span className="ml-1 text-sm font-medium text-${color}-600 md:ml-2">Components</span>
      </div>
    </li>
  </ol>
</nav>`,
      generatePreview: (color: string) => (
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className={`inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-${color}-600 dark:hover:text-${color}-400`}>
                <Home className="w-4 h-4 mr-2" />
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <a href="#" className={`ml-1 text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-${color}-600 dark:hover:text-${color}-400 md:ml-2`}>
                  Library
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <span className={`ml-1 text-sm font-medium text-${color}-600 md:ml-2`}>Components</span>
              </div>
            </li>
          </ol>
        </nav>
      ),
      code: '',
      preview: null
    },
    {
      id: 'tab-navigation',
      name: 'Tab Navigation',
      category: 'Navigation',
      description: 'Horizontal tab navigation',
      color: 'purple',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="border-b border-gray-200 dark:border-gray-700">
  <nav className="-mb-px flex space-x-8">
    <a href="#" className="border-${color}-500 text-${color}-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
      Dashboard
    </a>
    <a href="#" className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
      Team
    </a>
    <a href="#" className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
      Projects
    </a>
    <a href="#" className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
      Calendar
    </a>
  </nav>
</div>`,
      generatePreview: (color: string) => (
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <a href="#" className={`border-${color}-500 text-${color}-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}>
              Dashboard
            </a>
            <a href="#" className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
              Team
            </a>
            <a href="#" className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
              Projects
            </a>
            <a href="#" className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm">
              Calendar
            </a>
          </nav>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'pagination',
      name: 'Pagination',
      category: 'Navigation',
      description: 'Page navigation component',
      color: 'indigo',
      hasColorPicker: true,
      generateCode: (color: string) => `<nav className="flex items-center justify-between">
  <div className="flex-1 flex justify-between sm:hidden">
    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
      Previous
    </a>
    <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
      Next
    </a>
  </div>
  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
        <span className="font-medium">97</span> results
      </p>
    </div>
    <div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
          <ArrowLeft className="h-5 w-5" />
        </a>
        <a href="#" className="bg-${color}-50 dark:bg-${color}-900/50 border-${color}-500 text-${color}-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          1
        </a>
        <a href="#" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          2
        </a>
        <a href="#" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          3
        </a>
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
          <ArrowRight className="h-5 w-5" />
        </a>
      </nav>
    </div>
  </div>
</nav>`,
      generatePreview: (color: string) => (
        <nav className="flex items-center justify-between">
          <div className="flex-1 flex justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              Previous
            </a>
            <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              Next
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <ArrowLeft className="h-5 w-5" />
                </a>
                <a href="#" className={`bg-${color}-50 dark:bg-${color}-900/50 border-${color}-500 text-${color}-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                  1
                </a>
                <a href="#" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </a>
                <a href="#" className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  3
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <ArrowRight className="h-5 w-5" />
                </a>
              </nav>
            </div>
          </div>
        </nav>
      ),
      code: '',
      preview: null
    },
    {
      id: 'sidebar-nav',
      name: 'Sidebar Navigation',
      category: 'Navigation',
      description: 'Vertical sidebar navigation',
      color: 'emerald',
      hasColorPicker: true,
      generateCode: (color: string) => `<nav className="space-y-1">
  <a href="#" className="bg-${color}-100 dark:bg-${color}-900/50 text-${color}-700 dark:text-${color}-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    <Home className="text-${color}-500 mr-3 h-5 w-5" />
    Dashboard
  </a>
  <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    <Users className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5" />
    Team
  </a>
  <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    <Folder className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5" />
    Projects
  </a>
  <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
    <Calendar className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5" />
    Calendar
  </a>
</nav>`,
      generatePreview: (color: string) => (
        <nav className="space-y-1">
          <a href="#" className={`bg-${color}-100 dark:bg-${color}-900/50 text-${color}-700 dark:text-${color}-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
            <Home className={`text-${color}-500 mr-3 h-5 w-5`} />
            Dashboard
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            <Users className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5" />
            Team
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            <Folder className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5" />
            Projects
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            <Calendar className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5" />
            Calendar
          </a>
        </nav>
      ),
      code: '',
      preview: null
    },
    {
      id: 'dropdown-menu',
      name: 'Dropdown Menu',
      category: 'Navigation',
      description: 'Dropdown navigation menu',
      color: 'rose',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="relative inline-block text-left">
  <button className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500">
    Options
    <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
  </button>
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div className="py-1">
      <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600">
        Account settings
      </a>
      <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600">
        Support
      </a>
      <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600">
        License
      </a>
      <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600">
        Sign out
      </a>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="relative inline-block text-left">
          <button className={`inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}>
            Options
            <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
          </button>
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
              <a href="#" className={`text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600`}>
                Account settings
              </a>
              <a href="#" className={`text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600`}>
                Support
              </a>
              <a href="#" className={`text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600`}>
                License
              </a>
              <a href="#" className={`text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${color}-600`}>
                Sign out
              </a>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },

    // Layout Category (5 components)
    {
      id: 'hero-section',
      name: 'Hero Section',
      category: 'Layout',
      description: 'Landing page hero section',
      color: 'blue',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="bg-gradient-to-r from-${color}-600 to-purple-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build Amazing
        <span className="block text-${color}-200">User Interfaces</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-${color}-100 max-w-3xl mx-auto">
        Create beautiful, responsive components with our modern UI library. Fast, accessible, and customizable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-${color}-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          Get Started
        </button>
        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-${color}-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className={`bg-gradient-to-r from-${color}-600 to-purple-600 text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Build Amazing
                <span className={`block text-${color}-200`}>User Interfaces</span>
              </h1>
              <p className={`text-lg mb-6 text-${color}-100 max-w-2xl mx-auto`}>
                Create beautiful, responsive components with our modern UI library.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-6 py-3 bg-white text-${color}-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors`}>
                  Get Started
                </button>
                <button className={`px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-${color}-600 transition-colors`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'feature-grid',
      name: 'Feature Grid',
      category: 'Layout',
      description: 'Grid layout for features',
      color: 'emerald',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="py-16 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Amazing Features
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Everything you need to build modern applications
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="w-12 h-12 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-4">
          <Zap className="w-6 h-6 text-${color}-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Performance</h3>
        <p className="text-gray-600 dark:text-gray-300">Lightning-fast loading and smooth interactions.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="w-12 h-12 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-4">
          <Shield className="w-6 h-6 text-${color}-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure</h3>
        <p className="text-gray-600 dark:text-gray-300">Built with security best practices in mind.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="w-12 h-12 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-4">
          <Rocket className="w-6 h-6 text-${color}-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h3>
        <p className="text-gray-600 dark:text-gray-300">Simple and intuitive API for developers.</p>
      </div>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="py-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Amazing Features
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Everything you need to build modern applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className={`w-10 h-10 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-3`}>
                  <Zap className={`w-5 h-5 text-${color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Fast Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Lightning-fast loading times.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className={`w-10 h-10 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-3`}>
                  <Shield className={`w-5 h-5 text-${color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Secure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Built with security in mind.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className={`w-10 h-10 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center mb-3`}>
                  <Rocket className={`w-5 h-5 text-${color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Easy to Use</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Simple and intuitive API.</p>
              </div>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'testimonial-section',
      name: 'Testimonial Section',
      category: 'Layout',
      description: 'Customer testimonials layout',
      color: 'purple',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="py-16 bg-white dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        What Our Customers Say
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Don't just take our word for it
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <div className="flex text-${color}-500">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          "This product has completely transformed how we work. Highly recommended!"
        </p>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-${color}-500 rounded-full flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">CEO, TechCorp</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="py-8 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Don't just take our word for it
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className={`flex text-${color}-500`}>
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "This product has completely transformed how we work. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className={`w-8 h-8 bg-${color}-500 rounded-full flex items-center justify-center mr-3`}>
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Sarah Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'cta-section',
      name: 'Call to Action',
      category: 'Layout',
      description: 'Call to action section',
      color: 'orange',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="bg-${color}-600">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
      <span className="block">Ready to dive in?</span>
      <span className="block text-${color}-200">Start your free trial today.</span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-${color}-600 bg-white hover:bg-gray-50">
          Get started
        </button>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${color}-500 hover:bg-${color}-400">
          Learn more
        </button>
      </div>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className={`bg-${color}-600`}>
          <div className="max-w-4xl mx-auto py-8 px-4 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              <span className="block">Ready to dive in?</span>
              <span className={`block text-${color}-200`}>Start your free trial today.</span>
            </h2>
            <div className="mt-6 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-${color}-600 bg-white hover:bg-gray-50`}>
                  Get started
                </button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-${color}-500 hover:bg-${color}-400`}>
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'footer-section',
      name: 'Footer',
      category: 'Layout',
      description: 'Website footer layout',
      color: 'gray',
      hasColorPicker: false,
      generateCode: (color: string) => `<footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8 xl:col-span-1">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3"></div>
          <span className="text-xl font-bold">FreeUI</span>
        </div>
        <p className="text-gray-400 text-base">
          Making the world a better place through constructing elegant hierarchies.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Marketing</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Analytics</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Commerce</a></li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Guides</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 border-t border-gray-700 pt-8">
      <p className="text-base text-gray-400 xl:text-center">
        &copy; 2025 FreeUI. All rights reserved.
      </p>
    </div>
  </div>
</footer>`,
      generatePreview: (color: string) => (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg mr-2"></div>
                  <span className="text-lg font-bold">FreeUI</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Making the world a better place through elegant design.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-3">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Marketing</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Analytics</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Commerce</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-3">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-sm text-gray-400 hover:text-white">Guides</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400 text-center">
                &copy; 2025 FreeUI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
      code: '',
      preview: null
    },

    // Data Display Category (5 components)
    {
      id: 'data-table',
      name: 'Data Table',
      category: 'Data Display',
      description: 'Responsive data table',
      color: 'indigo',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="overflow-x-auto">
  <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
    <thead className="bg-gray-50 dark:bg-gray-700">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Jane Cooper</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Regional Paradigm Technician</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-800 dark:text-${color}-300">
            Active
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Admin</td>
      </tr>
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Cody Fisher</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Product Directives Officer</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
            Inactive
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Member</td>
      </tr>
    </tbody>
  </table>
</div>`,
      generatePreview: (color: string) => (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Jane Cooper</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-800 dark:text-${color}-300`}>
                    Active
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Admin</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Cody Fisher</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    Inactive
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Member</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'progress-bar',
      name: 'Progress Bar',
      category: 'Data Display',
      description: 'Animated progress indicator',
      color: 'green',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="space-y-4">
  <div>
    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      <span>Progress</span>
      <span>75%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className="bg-${color}-600 h-2 rounded-full transition-all duration-300 ease-out" style={{width: '75%'}}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      <span>Storage</span>
      <span>45%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className="bg-${color}-600 h-2 rounded-full transition-all duration-300 ease-out" style={{width: '45%'}}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      <span>Memory</span>
      <span>90%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className="bg-${color}-600 h-2 rounded-full transition-all duration-300 ease-out" style={{width: '90%'}}></div>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="space-y-4 w-full max-w-sm">
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className={`bg-${color}-600 h-2 rounded-full transition-all duration-300 ease-out`} style={{width: '75%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <span>Storage</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className={`bg-${color}-600 h-2 rounded-full transition-all duration-300 ease-out`} style={{width: '45%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <span>Memory</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className={`bg-${color}-600 h-2 rounded-full transition-all duration-300 ease-out`} style={{width: '90%'}}></div>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'badge-collection',
      name: 'Badge Collection',
      category: 'Data Display',
      description: 'Various badge styles',
      color: 'blue',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="flex flex-wrap gap-2">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-100 dark:bg-${color}-900/30 text-${color}-800 dark:text-${color}-300">
    Primary
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
    Secondary
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
    Success
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
    Warning
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
    Error
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-${color}-600 text-white">
    <span className="w-1.5 h-1.5 mr-1.5 bg-white rounded-full"></span>
    Online
  </span>
</div>`,
      generatePreview: (color: string) => (
        <div className="flex flex-wrap gap-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-100 dark:bg-${color}-900/30 text-${color}-800 dark:text-${color}-300`}>
            Primary
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
            Secondary
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
            Success
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
            Warning
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
            Error
          </span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-${color}-600 text-white`}>
            <span className="w-1.5 h-1.5 mr-1.5 bg-white rounded-full"></span>
            Online
          </span>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'alert-messages',
      name: 'Alert Messages',
      category: 'Data Display',
      description: 'Alert notification components',
      color: 'blue',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="space-y-4">
  <div className="bg-${color}-50 dark:bg-${color}-900/30 border border-${color}-200 dark:border-${color}-800 rounded-md p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <Info className="h-5 w-5 text-${color}-400" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-${color}-800 dark:text-${color}-300">
          Information
        </h3>
        <div className="mt-2 text-sm text-${color}-700 dark:text-${color}-400">
          <p>This is an informational alert message.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <CheckCircle className="h-5 w-5 text-green-400" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-green-800 dark:text-green-300">
          Success
        </h3>
        <div className="mt-2 text-sm text-green-700 dark:text-green-400">
          <p>Your action was completed successfully.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <XCircle className="h-5 w-5 text-red-400" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800 dark:text-red-300">
          Error
        </h3>
        <div className="mt-2 text-sm text-red-700 dark:text-red-400">
          <p>There was an error processing your request.</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="space-y-3">
          <div className={`bg-${color}-50 dark:bg-${color}-900/30 border border-${color}-200 dark:border-${color}-800 rounded-md p-3`}>
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className={`h-4 w-4 text-${color}-400`} />
              </div>
              <div className="ml-2">
                <h3 className={`text-sm font-medium text-${color}-800 dark:text-${color}-300`}>
                  Information
                </h3>
                <div className={`mt-1 text-xs text-${color}-700 dark:text-${color}-400`}>
                  <p>This is an informational alert message.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md p-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-4 w-4 text-green-400" />
              </div>
              <div className="ml-2">
                <h3 className="text-sm font-medium text-green-800 dark:text-green-300">
                  Success
                </h3>
                <div className="mt-1 text-xs text-green-700 dark:text-green-400">
                  <p>Your action was completed successfully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    },
    {
      id: 'metric-cards',
      name: 'Metric Cards',
      category: 'Data Display',
      description: 'Key performance indicator cards',
      color: 'purple',
      hasColorPicker: true,
      generateCode: (color: string) => `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Users className="h-6 w-6 text-gray-400" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              Total Users
            </dt>
            <dd>
              <div className="text-lg font-medium text-gray-900 dark:text-white">71,897</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-700 px-5 py-3">
      <div className="text-sm">
        <a href="#" className="font-medium text-${color}-700 dark:text-${color}-400 hover:text-${color}-900 dark:hover:text-${color}-300">
          View all
        </a>
      </div>
    </div>
  </div>

  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <DollarSign className="h-6 w-6 text-gray-400" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              Revenue
            </dt>
            <dd>
              <div className="text-lg font-medium text-gray-900 dark:text-white">$405,091.00</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-700 px-5 py-3">
      <div className="text-sm">
        <a href="#" className="font-medium text-${color}-700 dark:text-${color}-400 hover:text-${color}-900 dark:hover:text-${color}-300">
          View all
        </a>
      </div>
    </div>
  </div>
</div>`,
      generatePreview: (color: string) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Total Users
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">71,897</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2">
              <div className="text-sm">
                <a href="#" className={`font-medium text-${color}-700 dark:text-${color}-400 hover:text-${color}-900 dark:hover:text-${color}-300`}>
                  View all
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Revenue
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">$405,091</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2">
              <div className="text-sm">
                <a href="#" className={`font-medium text-${color}-700 dark:text-${color}-400 hover:text-${color}-900 dark:hover:text-${color}-300`}>
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
      code: '',
      preview: null
    }
  ];

  // Initialize component code and preview based on current colors
  useEffect(() => {
    components.forEach(component => {
      const currentColor = getComponentColor(component.id, component.color);
      component.code = component.generateCode(currentColor);
      component.preview = component.generatePreview(currentColor);
    });
  }, [componentColors]);

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleCode = (id: string) => {
    setShowCode(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#c8b6ff' }}>
      <ScrollProgress />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <FreeUILogo className="w-10 h-10" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FreeUI
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 -mt-1">Beautiful Components</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                <button
                  onClick={() => scrollToSection('components')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  Components
                </button>
                <button
                  onClick={() => scrollToSection('documentation')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  Documentation
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  About
                </button>
                <a href="mailto:xroberto1517@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                  Contact
                </a>
              </nav>
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    scrollToSection('components');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-left"
                >
                  Components
                </button>
                <button
                  onClick={() => {
                    scrollToSection('documentation');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-left"
                >
                  Documentation
                </button>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-left"
                >
                  About
                </button>
                <a href="mailto:xroberto1517@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                  Contact
                </a>
              </nav>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-800 dark:text-blue-300 text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            Free • Open Source • Production Ready
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              Beautiful UI
            </span>
            <span className="block text-gray-900 dark:text-white mt-2">
              Components
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Copy and paste <span className="font-semibold text-blue-600 dark:text-blue-400">stunning</span>,
            production-ready components built with
            <span className="font-semibold text-purple-600 dark:text-purple-400"> Tailwind CSS</span> and
            <span className="font-semibold text-pink-600 dark:text-pink-400"> React</span>.
            <br />
            <span className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 mt-2 block">
              No dependencies, just beautiful code.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection('components')}
              className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-transparent"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Browse Components
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">{components.length}+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Components</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">{categories.length - 1}</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Categories</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Free</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2">0</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Dependencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section id="components" className="py-6 sm:py-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-y border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <main className="py-8 sm:py-12" style={{ backgroundColor: '#c8b6ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredComponents.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No components found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid'
              ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
              : "space-y-6"
            }>
              {filteredComponents.map((component) => {
                const currentColor = getComponentColor(component.id, component.color);
                const currentCode = component.generateCode(currentColor);
                const currentPreview = component.generatePreview(currentColor);
                
                return (
                  <div
                    key={component.id}
                    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                    }`}
                  >
                    {/* Preview Section */}
                    <div className={`${viewMode === 'list' ? 'lg:w-1/2' : ''} p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center min-h-[200px]`}>
                      {currentPreview}
                    </div>

                    {/* Content Section */}
                    <div className={`${viewMode === 'list' ? 'lg:w-1/2' : ''} p-4 sm:p-6 relative`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                              {component.name}
                            </h3>
                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full w-fit">
                              {component.category}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {component.description}
                          </p>
                        </div>
                      </div>

                      {/* Color Picker and Actions - Fixed positioning */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        {component.hasColorPicker !== false && (
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Color:</span>
                            <div className="relative z-50">
                              <ColorPicker
                                selectedColor={currentColor}
                                onColorChange={(newColor) => updateComponentColor(component.id, newColor)}
                                size="sm"
                              />
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2 ml-auto">
                          <Tooltip content="Preview component">
                            <button
                              onClick={() => toggleCode(component.id)}
                              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                            >
                              {showCode[component.id] ? <Eye className="w-5 h-5" /> : <Code className="w-5 h-5" />}
                            </button>
                          </Tooltip>
                          
                          <Tooltip content="Copy code">
                            <button
                              onClick={() => copyToClipboard(currentCode, component.id)}
                              className="p-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all"
                            >
                              {copiedId === component.id ? (
                                <div className="flex items-center space-x-1">
                                  <Check className="w-5 h-5 text-amber-600" />
                                </div>
                              ) : (
                                <Sparkles className="w-5 h-5" />
                              )}
                            </button>
                          </Tooltip>
                        </div>
                      </div>

                      {/* Code Block */}
                      {showCode[component.id] && (
                        <div className="mt-4">
                          <CodeBlock code={currentCode} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Enhanced Documentation Section */}
      <section id="documentation" className="py-16 relative overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-purple-200/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-pink-200/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-800 dark:text-blue-300 text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm border border-white/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Complete Guide
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Documentation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to get started with FreeUI components
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Getting Started */}
            <div className="group bg-white/70 dark:bg-gray-700/70 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Getting Started</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                FreeUI components are built with Tailwind CSS and React. Simply copy the component code and paste it into your project.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  No installation required
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Copy and paste ready
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Fully customizable
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="group bg-white/70 dark:bg-gray-700/70 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Requirements</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Make sure you have the following dependencies installed in your project:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Code className="w-4 h-4 text-blue-500 mr-2" />
                  React 18+
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Code className="w-4 h-4 text-blue-500 mr-2" />
                  Tailwind CSS 3+
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Code className="w-4 h-4 text-blue-500 mr-2" />
                  Lucide React (for icons)
                </div>
              </div>
            </div>

            {/* Customization */}
            <div className="group bg-white/70 dark:bg-gray-700/70 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Customization</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All components are fully customizable using Tailwind CSS classes. Change colors, sizes, and styles to match your design.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                  Color variants included
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                  Dark mode support
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                  Responsive design
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="group bg-white/70 dark:bg-gray-700/70 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Support</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Need help or have questions? We're here to support you on your development journey.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail className="w-4 h-4 text-blue-500 mr-2" />
                  Email support
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Github className="w-4 h-4 text-gray-500 mr-2" />
                  GitHub issues
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <BookOpen className="w-4 h-4 text-green-500 mr-2" />
                  Community driven
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* About Me Section */}
<section className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        About the Creator
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Feel free to collaborate and give your opinion about FreeUI.
      </p>
    </div>

    <div
      className="bg-[#fdf1f7] dark:bg-[#2a2a2a]
                 rounded-2xl p-8 shadow-lg 
                 border-2 border-pink-200 dark:border-pink-400/40 
                 transition-all duration-300
                 hover:shadow-pink-300/50 dark:hover:shadow-pink-400/30
                 hover:ring-4 hover:ring-pink-300/40 dark:hover:ring-pink-400/40
                 hover:scale-[1.02] backdrop-blur-md"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="/public/ghiblime-min.png"
            alt="Edgar Roberto - Creator of FreeUI"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-600"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Edgar Roberto B.
          </h3>
          <p className="text-lg text-pink-600 dark:text-pink-400 font-semibold mb-3">
            UI/UX Designer
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Passionate about creating beautiful, accessible, and performant user interfaces.
            I built FreeUI to help developers quickly implement stunning components
            without the hassle of starting from scratch. Every component is crafted with
            attention to detail and modern design principles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:xroberto1517@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition-colors duration-300 shadow-md"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Gmail Icon"
                className="w-5 h-5 mr-2"
              />
              Get in Touch
            </a>
            <a
              href="https://github.com/eggr7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-colors duration-300 shadow-md"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub Icon"
                className="w-5 h-5 mr-2 invert"
              />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Glows */}
  <div className="absolute -top-8 left-20 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse dark:bg-pink-100/10"></div>
  <div className="absolute bottom-10 right-10 w-28 h-28 bg-purple-200/30 rounded-full blur-2xl animate-pulse dark:bg-purple-100/10"></div>
</section>



{/* Footer */}
<footer className="bg-gray-900 text-white border-t border-gray-800">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
      {/* Brand & Description */}
      <div className="md:col-span-2">
        <div className="flex items-center mb-4">
          <FreeUILogo className="w-8 h-8 mr-3" />
          <span className="text-2xl font-bold tracking-wide">FreeUI</span>
        </div>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl">
          Beautiful, production-ready UI components built with Tailwind CSS and React.
          Copy, paste, and customize to build stunning interfaces with ease and style.
        </p>

        {/* Tec logos */}
        <div className="flex items-center space-x-6 mt-6">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110 animate-float opacity-80 hover:opacity-100"
            title="React"
          >
            <img src="/public/react-logo.svg" alt="React" className="w-7 h-7" />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110 animate-float opacity-80 hover:opacity-100"
            title="Tailwind CSS"
          >
            <img src="/public/tailwind-logo.svg" alt="Tailwind CSS" className="w-7 h-7" />
          </a>
          <a
            href="https://bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110 animate-float opacity-80 hover:opacity-100"
            title="Bolt.new"
          >
            <img
              src="/public/logotext_poweredby_360w.png"
              alt="Bolt.new"
              className="h-7 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      {/* Support Links */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
          Support
        </h3>
        <ul className="space-y-3">
          <li>
            <a
              href="mailto:xroberto1517@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/eggr7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
      <p>© 2025 FreeUI. All rights reserved.</p>
      <p className="mt-2 md:mt-0">Built with ❤️ using React & Tailwind CSS</p>
    </div>
  </div>
</footer>

      {/* Enhanced Bolt Logo */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
        <BoltLogo />
      </div>
    </div>
  );
};

export default FreeUI;
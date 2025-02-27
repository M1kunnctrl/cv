import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SocialLinks } from "@/components/ui/social-links";
import { ContactForm } from "@/components/ui/contact-form";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"} transition-all duration-500`}>
      {/* Header */}
      <header className="p-5 flex justify-between items-center max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Ayomikun's Portfolio
        </motion.h1>
        <Button 
          onClick={toggleDarkMode} 
          variant="outline"
          size="icon"
          className="rounded-full"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-[80vh] text-center px-5 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-40 h-40 rounded-full overflow-hidden mb-8"
        >
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h2 className="text-5xl font-extrabold mb-4">Hey, I'm Ayomikun! 🚀</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Cybersecurity Enthusiast | Writer
        </p>
        <SocialLinks />
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-5 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">My Expertise</h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-700 shadow-lg"
            >
              <h4 className="text-xl font-bold mb-2">Cybersecurity</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A passionate cybersecurity enthusiast dedicated to uncovering digital threats and securing online spaces. Specialized in forensic analysis, cyber espionage validation, and ethical hacking. Committed to bridging the gap between security and awareness for a safer cyberspace.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-700 shadow-lg"
            >
              <h4 className="text-xl font-bold mb-2">Writing</h4>
              <p className="text-gray-600 dark:text-gray-300">
                As a writer, I explore the complexities of human emotions, societal constructs, and personal growth through storytelling. My Substack, Divine's Journal, is a space where I reflect on life, relationships, and self-discovery through fiction, newsletters, and screenplays.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Let's Connect</h3>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Ayomikun's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

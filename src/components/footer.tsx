export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Yusuf Ansari</p>
            <p className="text-gray-400">Web Developer</p>
          </div>

          <div className="text-center md:text-right">
            <p>&copy; {currentYear} Yusuf Ansari. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-1">Designed and built with ❤️ using Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

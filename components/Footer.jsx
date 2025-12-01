export default function Footer(){
  return (
    <footer className="py-8 mt-12 border-t border-white/6">
      <div className="container flex items-center justify-between">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Ranajit Dhar — Built with ❤️</div>
        <div className="flex gap-4 text-sm">
          <a href="#contact" className="text-neon">Contact</a>
          <a href="https://github.com/ranajitdharpersonal" target="_blank" className="text-slate-300">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

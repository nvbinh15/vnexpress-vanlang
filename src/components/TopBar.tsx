import WeatherWidget from './WeatherWidget'

export default function TopBar() {
  // Pinned "today" in the Văn Lang universe: the Sơn Tinh–Thủy Tinh flood era.
  const todayLabel = 'Năm Hùng Vương thứ 18, mùa lũ'

  // m.vnexpress.net hides the desktop utility bar entirely on mobile —
  // we follow that pattern: shown from lg and up only.
  return (
    <div className="hidden lg:block border-b border-vne-line bg-white text-[12px] text-vne-mute">
      <div className="mx-auto flex h-[28px] max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <span>{todayLabel}</span>
          <span className="text-vne-line">|</span>
          <a className="hover:text-vne-red">RSS</a>
        </div>
        <div className="flex items-center gap-3">
          <WeatherWidget />
          <span className="text-vne-line">|</span>
          <a className="hover:text-vne-red">Podcasts</a>
          <span className="text-vne-line">|</span>
          <a className="hover:text-vne-red">Đăng ký</a>
        </div>
      </div>
    </div>
  )
}

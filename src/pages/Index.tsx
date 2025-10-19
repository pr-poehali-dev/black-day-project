import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'admins', 'social', 'resources', 'lore'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'О проекте', icon: 'BookOpen' },
    { id: 'admins', label: 'Администраторы', icon: 'Users' },
    { id: 'social', label: 'Соцсети', icon: 'Share2' },
    { id: 'resources', label: 'Важные ресурсы', icon: 'Link' },
    { id: 'lore', label: 'Лор мира', icon: 'Scroll' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-accent tracking-tight">
              BLACK DAY: THE LAST WAR
            </h1>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <section id="about" className="min-h-screen flex items-center animate-fade-in">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent">О проекте</h2>
              <Separator className="mb-8 bg-accent" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  BLACK DAY: THE LAST WAR — это масштабная литературная вселенная, 
                  повествующая о последней войне человечества в мире, 
                  погрузившемся во тьму.
                </p>
                <p>
                  Серия историй, объединенных общим сюжетом, раскрывает судьбы 
                  героев, борющихся за выживание в условиях глобального конфликта.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="mt-8 border-accent text-accent hover:bg-accent hover:text-background"
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="admins" className="min-h-screen flex items-center bg-card">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent">Администраторы</h2>
              <Separator className="mb-12 bg-accent" />
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Александр Волков', role: 'Главный редактор', icon: 'Crown' },
                  { name: 'Мария Соколова', role: 'Креативный директор', icon: 'Sparkles' },
                  { name: 'Дмитрий Орлов', role: 'Лор-мастер', icon: 'BookMarked' },
                  { name: 'Елена Петрова', role: 'Координатор сообщества', icon: 'Users' },
                ].map((admin, idx) => (
                  <Card key={idx} className="p-6 bg-background border-border hover-scale">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Icon name={admin.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{admin.name}</h3>
                        <p className="text-muted-foreground">{admin.role}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="social" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent">Соцсети</h2>
              <Separator className="mb-12 bg-accent" />
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: 'Telegram', icon: 'MessageCircle', url: '#' },
                  { name: 'VKontakte', icon: 'AtSign', url: '#' },
                  { name: 'Discord', icon: 'Users', url: '#' },
                  { name: 'YouTube', icon: 'Video', url: '#' },
                  { name: 'Instagram', icon: 'Image', url: '#' },
                  { name: 'Twitter', icon: 'Twitter', url: '#' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:text-background transition-all hover-scale"
                  >
                    <Icon name={social.icon} size={24} />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="min-h-screen flex items-center bg-card">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent">Важные ресурсы</h2>
              <Separator className="mb-12 bg-accent" />
              <div className="space-y-4">
                {[
                  { title: 'Библиотека историй', desc: 'Полная коллекция произведений вселенной', icon: 'Library' },
                  { title: 'Карта мира', desc: 'Интерактивная карта территорий и локаций', icon: 'Map' },
                  { title: 'Хронология событий', desc: 'Временная шкала ключевых моментов', icon: 'Clock' },
                  { title: 'Энциклопедия персонажей', desc: 'База данных всех героев и антагонистов', icon: 'User' },
                  { title: 'Правила мира', desc: 'Законы и механики вселенной', icon: 'FileText' },
                ].map((resource, idx) => (
                  <Card key={idx} className="p-6 bg-background border-border hover:border-accent transition-colors cursor-pointer hover-scale">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Icon name={resource.icon} size={24} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground">{resource.desc}</p>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="lore" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent">Лор мира</h2>
              <Separator className="mb-12 bg-accent" />
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Globe" size={28} className="text-accent" />
                    Основы мира
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Мир BLACK DAY — это постапокалиптическая реальность, где человечество 
                    столкнулось с неизвестной угрозой. Последняя война изменила 
                    геополитическую карту, разрушив привычные границы и создав новые альянсы.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Swords" size={28} className="text-accent" />
                    Фракции и конфликты
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Три основные фракции борются за контроль над оставшимися ресурсами: 
                    Объединенный Фронт, Теневой Совет и независимые группировки выживших. 
                    Каждая со своей идеологией и методами.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Zap" size={28} className="text-accent" />
                    Технологии и магия
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    В мире сосуществуют продвинутые технологии довоенной эпохи и 
                    загадочные силы, проявившиеся после катаклизма. Граница между 
                    наукой и мистикой стерта.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 BLACK DAY: THE LAST WAR. Все права защищены.
            </p>
            <p className="text-accent font-bold">
              Литературная вселенная
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
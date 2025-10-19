import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'admins', 'social', 'resources', 'states', 'lore'];
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
    { id: 'states', label: 'Государства', icon: 'Flag' },
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
                  { role: 'Основатель', username: '@Bar_golubaya_ustritsa', telegramUrl: 'https://t.me/Bar_golubaya_ustritsa', icon: 'Crown' },
                  { role: 'Старший администратор', username: '@DmitryJuly2001', telegramUrl: 'https://t.me/DmitryJuly2001', icon: 'Shield' },
                ].map((admin, idx) => (
                  <Card key={idx} className="p-6 bg-background border-border hover-scale cursor-pointer">
                    <a href={admin.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Icon name={admin.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{admin.role}</h3>
                        <p className="text-accent text-sm hover:underline">{admin.username}</p>
                      </div>
                    </a>
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
                  { name: 'VKontakte', icon: 'Users', url: 'https://vk.com/bd_2056' },
                  { name: 'Telegram', icon: 'MessageCircle', url: 'https://t.me/BD_2056_official_tg' },
                  { name: 'Author.Today', icon: 'BookOpen', url: 'http://author.today/u/buuund' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="p-6 bg-background border-border hover:border-accent transition-colors cursor-pointer hover-scale">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-accent/10">
                              <Icon name="Map" size={24} className="text-accent" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">Карта континентов</h3>
                              <p className="text-muted-foreground text-sm">Юния, Зелграндия, Туринги</p>
                            </div>
                          </div>
                          <div className="rounded-lg overflow-hidden border border-border">
                            <img 
                              src="https://cdn.poehali.dev/files/faa0142d-0c12-468a-8b82-ca4374b94c1c.png" 
                              alt="Карта континентов" 
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>Карта континентов и субконтинентов</DialogTitle>
                      </DialogHeader>
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="https://cdn.poehali.dev/files/faa0142d-0c12-468a-8b82-ca4374b94c1c.png" 
                          alt="Карта континентов" 
                          className="w-full h-auto"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="p-6 bg-background border-border hover:border-accent transition-colors cursor-pointer hover-scale">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-accent/10">
                              <Icon name="MapPin" size={24} className="text-accent" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">Политическая карта</h3>
                              <p className="text-muted-foreground text-sm">Государства Лиграна</p>
                            </div>
                          </div>
                          <div className="rounded-lg overflow-hidden border border-border">
                            <img 
                              src="https://cdn.poehali.dev/files/8855ea32-ee68-4ce9-92e7-9586dd5d74d8.png" 
                              alt="Политическая карта Лиграна" 
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>Политическая карта Лиграна</DialogTitle>
                      </DialogHeader>
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="https://cdn.poehali.dev/files/8855ea32-ee68-4ce9-92e7-9586dd5d74d8.png" 
                          alt="Политическая карта Лиграна" 
                          className="w-full h-auto"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {[
                  { title: 'Библиотека историй', desc: 'Полная коллекция произведений вселенной', icon: 'Library' },
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

        <section id="states" className="min-h-screen flex items-center bg-card">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent">Государства</h2>
              <Separator className="mb-12 bg-accent" />
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    name: 'Азурское королевство', 
                    desc: 'Одно из государств-разжигателей Первой континентальной войны. Бывшая часть Ллургийской империи.',
                    icon: 'Crown',
                    color: 'bg-blue-500/10'
                  },
                  { 
                    name: 'Саксен-Андусская империя', 
                    desc: 'Главный противник Азурского королевства. Разжигатель войны, дико ненавидящий своего соседа.',
                    icon: 'Swords',
                    color: 'bg-yellow-500/10'
                  },
                  { 
                    name: 'Республика Бургурий', 
                    desc: 'Государство, пережившее гражданскую войну по типу югославского конфликта 1991-2000 годов.',
                    icon: 'Flame',
                    color: 'bg-red-500/10'
                  },
                  { 
                    name: 'Лиранская республика', 
                    desc: 'Одно из государств континента Лигран, сформировавшееся после распада империи.',
                    icon: 'Building',
                    color: 'bg-pink-500/10'
                  },
                  { 
                    name: 'Ллургийская империя (бывшая)', 
                    desc: 'Великая империя, распавшаяся в 1681 году после 10-летней войны. Аналог Римской империи.',
                    icon: 'Castle',
                    color: 'bg-purple-500/10'
                  },
                  { 
                    name: 'Новоградская республика', 
                    desc: 'Государство, возникшее на обломках Ллургийской империи в северной части континента.',
                    icon: 'Landmark',
                    color: 'bg-gray-500/10'
                  },
                ].map((state, idx) => (
                  <Card key={idx} className="p-6 bg-background border-border hover:border-accent transition-all hover-scale">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${state.color}`}>
                        <Icon name={state.icon} size={24} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{state.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{state.desc}</p>
                      </div>
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
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Мир BLACK DAY строится на двух принципах: война и ненависть друг к другу. 
                    Страны постоянно грызутся между собой, но не менее страшная 
                    <span className="text-accent font-semibold"> пепельная чума 1000-1200 годов</span> скосила 
                    немалую часть человечества, обернув их в нынешнее положение.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Это положение приведет к разрушительной <span className="text-accent font-semibold">второй континентальной войне</span>. 
                    Первая континентальная война (ПКВ, 2029-2039) ничем не отличается от Первой мировой войны (1914-1918) 
                    по своей масштабности и разрушительности.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Cpu" size={28} className="text-accent" />
                    Технологии войны
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Технологический уровень стран представляет собой уникальную смесь эпох: 
                    <span className="text-accent font-semibold"> тактика и стратегия Первой мировой войны</span>, 
                    техника уровня Второй мировой, а также дроны и беспилотники современных конфликтов. 
                    Эта комбинация создает беспрецедентно жестокое и непредсказуемое поле боя.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Skull" size={28} className="text-accent" />
                    Пепельная чума
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Пепельная чума 1000-1200 годов навсегда изменила человечество. Эта катастрофа 
                    не только уничтожила миллионы жизней, но и заложила фундамент вечной ненависти 
                    между выжившими нациями, которая спустя столетия вылилась в континентальные войны.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Crown" size={28} className="text-accent" />
                    Ллургийская империя
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Ранее, до всех указанных событий 29-39 годов, существовала так называемая 
                    <span className="text-accent font-semibold"> Ллургийская империя</span> — 
                    аллегория на Римскую империю. В отличие от римской, Ллургийская империя 
                    под своей тяжестью и разным этническим составом была пороховой бочкой, 
                    которая взорвалась в <span className="text-accent font-semibold">1681 году</span>, 
                    распавшись в 10-летней войне на кучу независимых государств.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Swords" size={28} className="text-accent" />
                    Разжигатели войны
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Возвращаясь к Первой континентальной войне: её разжигателями, подобно Сербии и Австро-Венгрии, 
                    стали <span className="text-accent font-semibold">Азурское королевство</span> и 
                    <span className="text-accent font-semibold"> Саксен-Андусская империя</span>. 
                    Обе были частью Ллургийской империи и дико ненавидят друг друга настолько, 
                    что готовы объявить войну прямо сейчас.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Flame" size={28} className="text-accent" />
                    Республика Бургурий
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Второе состояние мира называется <span className="text-accent font-semibold">"Югославия 1991-2000 годов"</span>. 
                    Речь идёт о гражданской войне в <span className="text-accent font-semibold">Республике Бургурий</span>. 
                    Подобно Югославии, она распалась, совершая военные преступления на территории противника — 
                    ещё один шрам на теле истерзанного мира.
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
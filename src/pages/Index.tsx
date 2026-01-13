import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [acceptedOffers, setAcceptedOffers] = useState<Record<string, boolean>>({});

  const subjects = [
    { id: 'math', name: 'Математика', icon: 'Calculator', color: 'bg-orange-100' },
    { id: 'informatics', name: 'Информатика', icon: 'Code2', color: 'bg-amber-100' },
    { id: 'russian', name: 'Русский язык', icon: 'BookOpen', color: 'bg-yellow-100' },
    { id: 'chemistry', name: 'Химия', icon: 'FlaskConical', color: 'bg-orange-100' },
    { id: 'biology', name: 'Биология', icon: 'Leaf', color: 'bg-amber-100' },
    { id: 'english', name: 'Английский', icon: 'MessageCircle', color: 'bg-yellow-100' }
  ];

  const tariffs = [
    {
      id: 'basic',
      name: 'Базовый',
      lessons: '4 занятия/мес',
      group: 'до 10 человек',
      price: '4 990 ₽',
      features: ['Доступ к платформе', 'Домашние задания', 'Общий чат группы']
    },
    {
      id: 'standard',
      name: 'Стандарт',
      lessons: '8 занятий/мес',
      group: '3-5 человек',
      price: '9 990 ₽',
      features: ['Всё из Базового', 'Персональная обратная связь', 'Дополнительные материалы'],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      lessons: '8 занятий/мес',
      group: 'Индивидуально',
      price: '19 990 ₽',
      features: ['Всё из Стандарта', 'Личный преподаватель', 'Гибкое расписание', 'Работа над ошибками']
    }
  ];

  const reviews = [
    { name: 'Анна Соколова', subject: 'Математика', text: 'Отличный центр! Дочь занимается третий месяц, результаты уже видны. Преподаватели объясняют понятно и доступно.', rating: 5 },
    { name: 'Дмитрий Иванов', subject: 'Информатика', text: 'Сын готовился к ОГЭ, сдал на 5! Спасибо за профессионализм и внимательное отношение.', rating: 5 },
    { name: 'Екатерина Петрова', subject: 'Английский', text: 'Очень удобный формат онлайн-занятий. Не нужно тратить время на дорогу, а качество обучения на высоте.', rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-800">PERFEKZ</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">О центре</a>
              <a href="#subjects" className="text-gray-600 hover:text-orange-500 transition-colors">Предметы</a>
              <a href="#reviews" className="text-gray-600 hover:text-orange-500 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-orange-500 transition-colors">Контакты</a>
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-full">
                <Icon name="User" size={18} className="mr-2" />
                Личный кабинет
              </Button>
            </nav>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full">
                Официальная лицензия
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Дистанционное образование с гарантией качества
              </h1>
              <p className="text-xl text-gray-600">
                Подготовка к ОГЭ и ЕГЭ онлайн с квалифицированными преподавателями. 
                Занимайтесь из дома в удобное время!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full text-lg px-8">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 border-2 border-orange-300 hover:bg-orange-50">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Онлайн обучение" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">500+</div>
                    <div className="text-sm text-gray-600">Учеников</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">15+</div>
                    <div className="text-sm text-gray-600">Преподавателей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">94%</div>
                    <div className="text-sm text-gray-600">Успешность</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600">
              Официальный образовательный центр с лицензией
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'FileCheck', title: 'Официальный договор', desc: 'Все услуги оформляются юридически' },
              { icon: 'Award', title: 'Квалифицированные педагоги', desc: 'Преподаватели с опытом от 5 лет' },
              { icon: 'Shield', title: 'Гарантии качества', desc: 'Вернём деньги, если не понравится' },
              { icon: 'Home', title: 'Обучение из дома', desc: 'Не нужно тратить время на дорогу' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-lg hover:-translate-y-1 rounded-3xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Как это работает?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', icon: 'MousePointerClick', title: 'Выберите предмет', desc: 'и подходящий тариф' },
              { num: '2', icon: 'CreditCard', title: 'Оплатите обучение', desc: 'с принятием договора' },
              { num: '3', icon: 'ClipboardCheck', title: 'Пройдите тестирование', desc: 'для определения уровня' },
              { num: '4', icon: 'Video', title: 'Начните заниматься', desc: 'в личном кабинете' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={step.icon} className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-orange-300" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="subjects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Наши предметы
            </h2>
            <p className="text-xl text-gray-600">
              Выберите направление для подготовки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {subjects.map((subject) => (
              <Dialog key={subject.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="cursor-pointer border-2 border-orange-100 hover:border-orange-400 transition-all hover:shadow-xl hover:-translate-y-2 rounded-3xl"
                    onClick={() => setSelectedSubject(subject.id)}
                  >
                    <CardHeader>
                      <div className={`w-20 h-20 ${subject.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                        <Icon name={subject.icon} className="text-orange-600" size={40} />
                      </div>
                      <CardTitle className="text-2xl text-center">{subject.name}</CardTitle>
                      <CardDescription className="text-center text-base">
                        Подготовка к ОГЭ и ЕГЭ
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="bg-orange-500 hover:bg-orange-600 rounded-full w-full">
                        Подробнее
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-3xl flex items-center gap-4">
                      <div className={`w-16 h-16 ${subject.color} rounded-2xl flex items-center justify-center`}>
                        <Icon name={subject.icon} className="text-orange-600" size={32} />
                      </div>
                      {subject.name}
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                      Программа подготовки к экзаменам
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Программа курса:</h3>
                      <Accordion type="single" collapsible className="space-y-2">
                        <AccordionItem value="item-1" className="border border-orange-200 rounded-2xl px-4">
                          <AccordionTrigger className="text-lg">Базовый уровень</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            Освоение основных понятий и методов. Решение типовых задач. Подготовка к базовой части экзамена.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border border-orange-200 rounded-2xl px-4">
                          <AccordionTrigger className="text-lg">Продвинутый уровень</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            Углубленное изучение материала. Решение сложных и нестандартных задач. Работа над второй частью экзамена.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Выберите тариф:</h3>
                      <Tabs defaultValue="standard" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-orange-100 rounded-2xl p-1">
                          {tariffs.map((tariff) => (
                            <TabsTrigger 
                              key={tariff.id} 
                              value={tariff.id}
                              className="rounded-xl data-[state=active]:bg-white"
                            >
                              {tariff.name}
                              {tariff.popular && (
                                <Badge className="ml-2 bg-orange-500">Популярный</Badge>
                              )}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        {tariffs.map((tariff) => (
                          <TabsContent key={tariff.id} value={tariff.id} className="mt-6">
                            <Card className="border-2 border-orange-200 rounded-3xl">
                              <CardHeader>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                                    <CardDescription className="text-base">
                                      {tariff.lessons} • {tariff.group}
                                    </CardDescription>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-4xl font-bold text-orange-500">{tariff.price}</div>
                                    <div className="text-sm text-gray-500">в месяц</div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-3 mb-6">
                                  {tariff.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                      <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0" size={20} />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="space-y-4">
                                  <div className="flex items-start space-x-2">
                                    <Checkbox 
                                      id={`terms-${subject.id}-${tariff.id}`}
                                      checked={acceptedOffers[`${subject.id}-${tariff.id}`] || false}
                                      onCheckedChange={(checked) => setAcceptedOffers(prev => ({
                                        ...prev,
                                        [`${subject.id}-${tariff.id}`]: checked as boolean
                                      }))}
                                    />
                                    <label
                                      htmlFor={`terms-${subject.id}-${tariff.id}`}
                                      className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      Принимаю условия{' '}
                                      <a href="#" className="text-orange-500 hover:underline">
                                        договора-оферты
                                      </a>
                                    </label>
                                  </div>
                                  <Button 
                                    className="w-full bg-orange-500 hover:bg-orange-600 rounded-full text-lg py-6"
                                    disabled={!acceptedOffers[`${subject.id}-${tariff.id}`]}
                                    onClick={() => setSelectedTariff(tariff.id)}
                                  >
                                    Выбрать тариф
                                    <Icon name="ArrowRight" size={20} className="ml-2" />
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Отзывы наших учеников
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас родители и студенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="border-2 border-orange-100 rounded-3xl hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.subject}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{review.text}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@perfekz.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-2 border-orange-100 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">Остались вопросы?</CardTitle>
                <CardDescription className="text-base">Напишите нам, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-full text-lg py-6">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Открыть чат
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">PERFEKZ</span>
              </div>
              <p className="text-gray-400">
                Официальный образовательный центр с лицензией
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Разделы</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-400 transition-colors">О центре</a></li>
                <li><a href="#subjects" className="hover:text-orange-400 transition-colors">Предметы</a></li>
                <li><a href="#reviews" className="hover:text-orange-400 transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-orange-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Документы</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Лицензия</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Договор-оферта</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Образовательные программы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>г. Москва, ул. Примерная, д. 123</li>
                <li>+7 (999) 123-45-67</li>
                <li>info@perfekz.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 PERFEKZ. Все права защищены.
              </p>
              <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                Сведения об образовательной организации
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-110"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
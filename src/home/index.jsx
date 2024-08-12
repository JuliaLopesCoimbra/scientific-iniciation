import './styles.css';
import { UserIcon, DocumentIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';


const features = [
  {
    name: 'Antes de tudo',
    description:
      'O desenvolvimento de pesquisa não é apenas uma busca pelo conhecimento. É uma contribuição para o corpo de sabedoria existente, um passo em direção à resolução de problemas. O impacto da pesquisa ecoa além dos limites acadêmicos, alcançando um objetivo de transformar. Clique aqui e veja todo o desenvolvimento.',
    icon: ChartBarIcon,
    link: '/pesquisa'
  },
  {
    name: 'Para me conhecer',
    description:
      'Além de retratar os projetos, metas e objetivos, só foram possíveis com o compromentimento do meu crescimento e da minha evolução contínua. Clicando aqui te convido a saber mais sobre mim.',
    icon: UserIcon,
    link: '/sobre'
  },
  {
    name: 'As publicações',
    description:
      'Dentro das linhas e entrelinhas das publicações, você encontrará não apenas pensamentos, mas uma jornada. Uma jornada que convida à exploração, celebra a diversidade, e destaca o poder transformador das palavras compartilhadas. Leia aqui o meu artigo acadêmico.',
    icon: DocumentIcon,
    link: '/publicacoes'
  },
  {
    name: 'Você pode mudar',
    description:
      'Permita que sua capacidade seja maior que todos os outros pensamentos, junto com a tecnologia você pode viver coisas grandes, é isso que quero trazer desde o princípio. Clique aqui e aprenda com a minha pesquisa.',
    icon: LightBulbIcon,
    link: '/voce-pode-mudar'
  },
];

export default function Home() {
  return (
    <div className="bg-black py-24 sm:py-32  img">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 img2 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">ESTUDO DA INTELIGÊNCIA ARTIFICIAL E COMO O CHATGPT AUXÍLIA NA TOMADA DE DECISÃO</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl titlePrincipal">
            Olá pesquisador !
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl titlePrincipal">
          Meu nome é Júlia e esse site mostra tudo sobre a minha iniciação científica
          </p>
          
          <p className="mt-6 leading-8 text-gray-600">
          Tudo que você precisa saber sobre a minha pesquisa está aqui
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base  leading-7 text-white sub-title">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span>{feature.name}</span>
                </dt>
                {/* Descrição como um link */}
                <dd className="mt-2 text-base leading-7 text-gray-600 text-sub">
                  <a href={feature.link}>{feature.description}</a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

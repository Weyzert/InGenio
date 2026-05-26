export const usuarios = [
  {
    id: 1,
    nome: "Carlos Silva",
    login: "carlos.silva",
    senha: "123456",
    profissional: true,
    cpf: "11111111111",
  },
  {
    id: 2,
    nome: "Mariana Costa",
    login: "mariana.costa",
    senha: "123456",
    profissional: true,
    cpf: "22222222222",
  },
  {
    id: 3,
    nome: "Pedro Almeida da Costa Silva de Oliveira",
    login: "pedro.almeida",
    senha: "123456",
    profissional: false,
    cpf: "33333333333",
  },
  {
    id: 4,
    nome: "Fernanda Zlinchez Rocha",
    login: "fernanda.rocha",
    senha: "123456",
    profissional: true,
    cpf: "44444444444",
  },
  {
    id: 5,
    nome: "Juliano Souza Fernandes Martines Gonzales",
    login: "juliano.souza",
    senha: "123456",
    profissional: true,
    cpf: "55555555555",
  },
];

export const contatos = [
  {
    id: 1,
    telefone1: "5433111111",
    telefone2: null,
    celular1: "54999999991",
    celular2: null,
    email1: "carlos@email.com",
    email2: null,
    linkWhats: "https://wa.me/5554999999991",
    linkTelegram: null,
    fk_usuario: 1,
  },
  {
    id: 2,
    telefone1: "5433222222",
    telefone2: null,
    celular1: "54999999992",
    celular2: null,
    email1: "mariana@email.com",
    email2: null,
    linkWhats: "https://wa.me/5554999999992",
    linkTelegram: null,
    fk_usuario: 2,
  },
  {
    id: 3,
    telefone1: "5433333333",
    telefone2: "5411111111",
    celular1: "54999999993",
    celular2: "54988888888",
    email1: "juliano@email.com",
    email2: "juliano22@hotmail.com",
    linkWhats: "https://wa.me/5554999999993",
    linkTelegram: "https://t.me/juliano",
    fk_usuario: 5,
  },
  {
    id: 4,
    telefone1: "5444444444",
    telefone2: "5444444444",
    celular1: "54944444444",
    celular2: "54988888888",
    email1: "fernandarocha@outlook.com",
    email2: "ferochas@yahoo.com.br",
    linkWhats: "https://wa.me/5554999999993",
    linkTelegram: "https://t.me/fernrocha",
    fk_usuario: 4,
  },
];

export const talentos = [
  {
    id: 1,
    nome: "Eletricista",
    descricao: "Instalações e manutenção elétrica",
  },
  {
    id: 2,
    nome: "Encanador",
    descricao: "Serviços hidráulicos residenciais",
  },
  {
    id: 3,
    nome: "Pintor",
    descricao: "Pintura interna ou externa para revestimentos em paredes ou estruturas",
  },
  {
    id: 4,
    nome: "Designer Gráfico",
    descricao: "Criação de identidade visual",
  },
  {
    id: 5,
    nome: "Programador",
    descricao: "Desenvolvimento geral de sistemas",
  },
  {
    id: 6,
    nome: "Escultor em Madeira",
    descricao: "Esculpir detalhes em superfícies ou peças de mobiliário ou artesanato",
  },
  {
    id: 7,
    nome: "Pintor de Quadros",
    descricao: "Artista que usa tintas e demais materiais para criar obras",
  },
  {
    id: 8,
    nome: "Marketing Digital",
    descricao: "Conjunto de estratégias de comunicação e vendas aplicadas no ambiente online",
  },
  {
    id: 9,
    nome: "Social Media",
    descricao: "Responsável por gerenciar a presença digital de marcas ou pessoas nas redes sociais",
  },
];

export const talentoUsuario = [
  {
    id: 1,
    especialista: true,
    fk_talento: 1,
    fk_usuario: 1,
  },
  {
    id: 2,
    especialista: false,
    fk_talento: 3,
    fk_usuario: 1,
  },
  {
    id: 3,
    especialista: false,
    fk_talento: 4,
    fk_usuario: 2,
  },
  {
    id: 4,
    especialista: true,
    fk_talento: 5,
    fk_usuario: 5,
  },
  {
    id: 5,
    especialista: false,
    fk_talento: 8,
    fk_usuario: 2,
  },
  {
    id: 6,
    especialista: false,
    fk_talento: 9,
    fk_usuario: 2,
  },
  {
    id: 7,
    especialista: true,
    fk_talento: 7,
    fk_usuario: 4,
  },
  {
    id: 8,
    especialista: true,
    fk_talento: 6,
    fk_usuario: 4,
  },
];

export const perfis = [
  {
    id: 1,
    descricao: "Sou o Carlos Silva, tenho 30 anos e trabalho transformando e protegendo lares. Como eletricista especialista, resolvo desde pequenos reparos até instalações complexas com total segurança. Também faço a pintura de paredes, garantindo um acabamento impecável e com estética moderna. Unindo técnica e capricho, entrego uma renovação completa, segura e sem dores de cabeça.",
    fk_cidade: 1,
    fotoPerfil: "/img/perfis/carlos.jpg",
    fotoCapa: "/img/capas/carlos.jpg",
    fk_usuario: 1,
  },
  {
    id: 2,
    descricao: "Sou a Mariana Costa, tenho 25 anos e crio a identidade visual do seu negócio. Atuo como designer gráfico, transformando ideias em artes atraentes, profissionais e cheias de personalidade. Como especialista em social media e marketing digital, gerencio suas redes para atrair novos clientes. Unindo estratégia e criatividade, faço sua marca se destacar no mercado e vender muito mais.",
    fk_cidade: 1,
    fotoPerfil: "/img/perfis/mariana.jpg",
    fotoCapa: "/img/capas/mariana.jpg",
    fk_usuario: 2,
  },
  {
    id: 3,
    descricao: "Sou o Juliano, programador fullstack de 23 anos orgulhosamente nascido na América Central. Desenvolvo sistemas completos, dominando com agilidade tanto o visual do front-end quanto a lógica do back-end. Trago a energia e a resiliência da minha cultura latina para criar códigos limpos, rápidos e eficientes. Transformo ideias complexas em plataformas digitais modernas, seguras e prontas para escalar o seu negócio.",
    fk_cidade: 1,
    fotoPerfil: "/img/perfis/juliano.jpg",
    fotoCapa: "/img/capas/juliano.jpg",
    fk_usuario: 5,
  },
  {
    id: 4,
    descricao: "Sou a Fernanda Zlinchez Rocha, artista plástica de 38 anos dedicada a dar vida e forma às artes visuais. Transformo telas em pinturas expressivas e esculpo peças únicas em madeira, unindo sensibilidade e artesanato.",
    fk_cidade: 1,
    fotoPerfil: "/img/perfis/fernanda.jpg",
    fotoCapa: "/img/capas/fernanda.jpg",
    fk_usuario: 4,
  },
];

export const etiquetas = [
  {
    id: 1,
    codigo: 12345,
    fk_perfil: 1,
    descricao: "CREA",
  },
  {
    id: 2,
    codigo: 98765,
    fk_perfil: 3,
    descricao: "",
  },
  {
    id: 3,
    codigo: 911111,
    fk_perfil: 3,
    descricao: "",
  },
];

export const avaliacoes = [
  {
    id: 1,
    estrelas: 5,
    descricao: "Excelente profissional.",
    dataHora: "2026-05-16T10:00:00",
    dataServico: "2026-05-10",
    fk_usuario: 3,
    fk_perfil: 1,
  },
  {
    id: 2,
    estrelas: 4,
    descricao: "Muito bom atendimento.",
    dataHora: "2026-05-15T15:30:00",
    dataServico: "2026-05-12",
    fk_usuario: 4,
    fk_perfil: 1,
  },
  {
    id: 3,
    estrelas: 5,
    descricao: "Excelente instalação elétrica.",
    dataHora: "2026-05-16T10:00:00",
    dataServico: "2026-05-10",
    fk_usuario: 3,
    fk_perfil: 1,
  },
  {
    id: 4,
    estrelas: 5,
    descricao: "Bom acabamento na pintura.",
    dataHora: "2026-05-16T10:00:00",
    dataServico: "2026-05-10",
    fk_usuario: 3,
    fk_perfil: 1,
  },
  {
    id: 5,
    estrelas: 4,
    descricao: "Orçameto justo.",
    dataHora: "2026-05-16T10:00:00",
    dataServico: "2026-05-10",
    fk_usuario: 3,
    fk_perfil: 1,
  },
  {
    id: 6,
    estrelas: 5,
    descricao: "Entrega rápida e ótima qualidade.",
    dataHora: "2026-05-14T09:20:00",
    dataServico: "2026-05-11",
    fk_usuario: 3,
    fk_perfil: 2,
  },
];

export const postagens = [
  {
    id: 1,
    foto: "/img/posts/post1.jpg",
    descricao: "Instalação elétrica concluída.",
    dataHora: "2026-05-16T08:00:00",
    fk_usuario: 1,
    fk_perfil: 1,
  },
  {
    id: 2,
    foto: "/img/posts/post2.jpg",
    descricao: "Novo projeto de identidade visual.",
    dataHora: "2026-05-15T13:00:00",
    fk_usuario: 2,
    fk_perfil: 2,
  },
  {
    id: 3,
    foto: "/img/posts/post3.jpg",
    descricao: "Sistema web publicado.",
    dataHora: "2026-05-14T19:00:00",
    fk_usuario: 5,
    fk_perfil: 3,
  },
  {
    id: 4,
    foto: "/img/posts/post4.jpg",
    descricao: "Parede quase finalizada.",
    dataHora: "2026-05-16T08:00:00",
    fk_usuario: 1,
    fk_perfil: 1,
  },
  {
    id: 5,
    foto: "/img/posts/post5.jpg",
    descricao: "Pequenos ajustes.",
    dataHora: "2026-05-16T08:00:00",
    fk_usuario: 1,
    fk_perfil: 1,
  },
  {
    id: 6,
    foto: "/img/posts/post6.webp",
    descricao: "Algumas variações que gosto de usar.",
    dataHora: "2026-05-16T08:00:00",
    fk_usuario: 1,
    fk_perfil: 1,
  },
  {
    id: 7,
    foto: "/img/posts/post7.jpg",
    descricao: "Esta paleta de cores eleva a sofisticação do espaço.",
    dataHora: "2026-05-16T08:00:00",
    fk_usuario: 1,
    fk_perfil: 1,
  },
];

export const ufs = [
  {
    id: 1,
    sigla: "RS",
    nome: "Rio Grande do Sul",
    fk_pais: 1,
  },
  {
    id: 2,
    sigla: "SC",
    nome: "Santa Catarina",
    fk_pais: 1,
  },
  {
    id: 3,
    sigla: "CABA",
    nome: "Buenos Aires",
    fk_pais: 2,
  },
];

export const cidades = [
  {
    id: 1,
    nome: "Passo Fundo",
    fk_uf: 1,
  },
  {
    id: 2,
    nome: "Porto Alegre",
    fk_uf: 1,
  },
  {
    id: 3,
    nome: "Florianópolis",
    fk_uf: 2,
  },
  {
    id: 4,
    nome: "Buenos Aires",
    fk_uf: 3,
  },
];

export const paises = [
  {
    id: 1,
    nome: "Brasil",
    sigla: "BR",
  },
  {
    id: 2,
    nome: "Argentina",
    sigla: "AR",
  },
];
let token = localStorage.getItem('token')
	? localStorage.getItem('token')
	: '';

let email = localStorage.getItem('email')
	? localStorage.getItem('email')
	: '';
let stripesessionid = localStorage.getItem('stripesession')
	? localStorage.getItem('stripesession')
	: '';

export const initialState = {
	user: '' ,
	token: '' || token,
    email: '' || email,
    stripesessionid: '' || stripesessionid,
	loading: false,
	errorMessage: null,
    userExist: false,
};

export const contentState = {
  signup:{
    heading: "¡Bienvenida a Amaru!",
    content: "Al crear una cuenta con nosotras podrás:",
    features : [
        {
          text: "Agendar con la psicóloga ideal para ti",
          "iconClass": "fas fa-check",
        },
        {
          text: "Pagar tus sesiones",
          "iconClass": "fas fa-check",
        },
        {
        text: "Modificar y/o cancelar tus citas",
        "iconClass": "fas fa-check",
        },
        {
        text: "Beneficios exclusivos Amaru",
        "iconClass": "fas fa-check",
        }


      ],
    formHeading: "Regístrate aquí",
    formContent: "",
    formText: "¿Ya tienes una cuenta en Amaru?",
    btnText: "Crear cuenta",
    btnText_2: "Inicia sesión aquí"
  },  
  login:{
    heading: "¡Qué gusto verte de regreso!",
    content: "Si ya te registraste con con tu correo puedes iniciar sesión ingresando tu contraseña y tu correo. Reserva una asesoria, aparta tus terapias y administra tus métodos de pagos iniciando sesión",
    formHeading: "Inicia Sesión",
    formContent: "Ingresa el correo y contraseña con los que creaste tu cuenta",
    formText: "¿No tienes una cuenta?",
    btnText: "Inicia Sesión",
    btnText_2: "Crear un cuenta"
  },
  HeadSectionContent : { //landingpage -> First section
    heading: "Una vida mejor comienza desde adentro",
    content: "Terapia en línea para mujeres",
    headingSlug: "Perspectiva de género y asesoría gratuita",
    //playImg: "/img/google-play.png",
    //appleImg: "/img/app-store.png",
    button: 'Agenda tu asesoría gratuita'
    //heroThumb: "/img/welcome_mockup.png"
  },


  AsesoriaSectionContent: {
    firstname: "Nombre",
    lastname: "Apellido",
    edad: 'Edad',
    email: "Email",

    psichologistSex: '¿Qué sexo tiene tu psicólogx ideal?',
    whyTherapy: '¿Por qué quieres tomar terapia? ',
    lastTherapy: '¿Anteriormente has tomado terapia?',
    lastTherapyType: '¿Qué tipo de terapia tomaste?',
    lastTherapyTypeScore: 'Desde tu percepción, ¿te ayudó este tipo de terapia?',
    currentTreatment: '¿Actualmente estás en algún tipo de tratamiento médico o psiquiátrico?',

    logo : "/img/logo-white.png",
    date: "Fecha",
    service: "Servicio",
    facebook: "Facebook",
    twitter: "Twitter",

    line1: "Dirección",
    line2: "Segunda Dirección",
    postal_code: "Codigo Postal",
    city: "Ciudad",
    country: null,
    currency: null,
    amount: "Cantidad",
},

ProfileFormContent: {
    title1: "Información de contacto.", 
    title2: "Experiencia Profesional", 
    title3: "Áreas de especialización.", 
    title4: "", 
    title5: "", 
    title6: "", 

    text1:"",
    text2: "Ayudanos a contestar el siguiente formulario sobre tu formación académica y experiencia.",
    text3: "Elige tres áreas de especialización que seran mostradas como sugerencias a nuestras pacientes y formaran parte de tu perfíl como psicóloga Amaru. ",
    text4:"",
    text5:"",
    text6:"",

    name : "Nombre",
    
    apellidoPaterno: 'Apellido Paterno',
    apellidoMaterno: 'Apellido Materno',
    email : "Correo electrónico",
    phone : "Telefono de contacto",
    whatsapp : "Podemos contactarte por WhatsApp?",

    cedulaprofesional: 'Número de cédula profesional',
    specilization_areas : "Elige tus 3 áreas de especialización (en caso de tener más de 3 elige las 3 en las que te gustaría trabajar en Amaru).",
    master : "¿Estudiaste una maestria en un área ralacionada a psicólogía?",
    mainspecialization : "¿En que tipos de casos se ha concentrado tu experiencia profesional o investigación?",
    biography : "Da una breve descripción de ti y de tu terapia, esta será una breve introducción con el que tu futuras pacientes podrán empezar a conocerte.",
    quote : "Escribe una frase corta con la que te gistaría que identificaran tu perfíl. Puede ser alguna frase que te inspire o algun consejo para las personas que buscan asistir a terapia.",
    linkedin : "¿Tienes perfil en LinkedIn? Compártenos tu url",
    //CV
    //profilephoto
    
    academic_information : "Información académica. Háblanos de tu experiencia profesional asistiendo o impartiendo terapia",
    description : "Escribe una pequeña presentación para subir a tu perfil. Esta introducción será una carta de presentación para tus futuras pacientes.",


    certificationGuarantee : "Conozco y acepto los términos del programa de Garantía Amaru",
    certificationSocialimpact : "¿Te gustaría formar parte del programa Amaru Social dedicando una sesión al mes para atender casos especiales o atender mujeres en situación de vulnerbilidad y pobreza?",
    certificationGroup : "¿Tienes experiencia o conocimeinto trabajando en terapias grupales?",
    certificationGender : "¿Tienes experiencia o conocimiento en el área de perspectiva de género (aplicado en psicólogía o desde un contexto sociocultural)?",

    
    question1 : "¿Qué le dirías a alguien que quiere comenzar su proceso psicoterapéutico?",
    question2 : "¿Que consejo o reomendación le darías a alguien que busca tomar terapia por primera vez?",
    question3 : "¿Que consejo o  le darías a alguien que busca tomar terapia en línea?",

},



CirculoFormContent: {
    titlestart: "Formulario círculo u organización.",
    title1: "Información de contacto.", 
    title2: "Ubicación.", 
    title3: "Información del círculo.", 
    title4: "Impacto Social.", 
    title5: "Perfilamiento.", 

    textstart1:"Los círculos o organizaciones de la plataforma Amaru son grupos de personas y comunidades enfocados en la mujer que buscan ofrecer un espacio seguro y/o recreativo. Abrimos este espacio para ofrecer información y difusión de temas y grupos enfocados en la atención de la mujer. Tu círculo u organización puede ser candidata a aparecer en la plataforma si: ",
    textstart2:"Requerimientos",
    textstart3:"Términos y condiciones: ",

    text1:"Con esta información podremos dar a conocer tu círculo en nuestra plataforma.",
    text2: "La información geográfica  ",
    text3: "Elige los temas con los que está relacionado círculo",
    text4:"Las siguientes preguntas nos ayudarán a conocer y perfilar mejor tu círculo. Con esta información podremos referenciar a nuestras pacientes y usuarias.",
    textend:"Gracias por tomarte el tiempo de llenar este cuestionario. Una de nuestras asesoras se pondrá en contacto contigo para llevar a acabo el proceso de certificación.",

    leader : "Nombre de la organizadora ",
    emailleader : "Correo  de la organizadora del círculo u organización",
    collaborator1: "Colaboradora 1: Nombre de la colaboradora del círculo. ",
    emailcollaborator1: "Correo  de la colaboradora del círculo",
    collaborator2: "Colaboradora 2: Nombre de la colaboradora del círculo. ",
    emailcollaborator2 : "Correo  de la colaboradora del círculo",

    direccion: "Direccion o área de referencia.",
    geocoordinates: "Coordenadas geográficas.",

    circuloname: 'Número de cédula profesional',
    circulodescription : "Maestría",
    circuloimage : "Telefono de contacto",
    circulologo : "Sube el logo de tu círculo u organización (opcional*)",

    question1 : "¿Cómo ayuda tu círculo a las mujeres de tu comunidad?",
    question2 : "¿Cuéntanos sobre las actividades que realiza tu círculo?",
    
    question3 : "¿Tu círculo requiere de contribuciónes o donaciones para su funcionamiento?",
    question4 : "¿Tu círculo requiere de pago de inscripciones o clases funcionamiento?",
    tags : "Selecciona todas las áreas o temas con los que este relacionado tu círculo.",
    
    //TEMAS SELECCIONAR
},


PhotoFormContent: {
    titlestart: "Formulario de Blog",
    titleend: "Fin del formulario de Blog",

    title1: "Información de la autora", 
    title3: "Título y contenido", 
    title4: "Contenido: Primera sección", 
    title5: "Contenido: Segunda sección", 
    title6: "Contenido: Tercera sección (opcional) ", 
    title7: "Gracias por contestar este formulario. Nuestras asesoras revisarán tu publicación antes de subir el contenido a nuestra página.", 

    textstart1:"Estás a punto de iniciar el formulario de blog de Amaru. Utilizamos este espacio para brindar información oportuna a temas relacionados con psicología y  perspectiva de género. Nos reservamos el derecho de publicación intentando evitar la difusión de contenido extremista o no documentado.",
    textstart2:" ",
    textstart3:" ",

    text1:"Compártenos esta información sobre las o los autores del árticulo que deseas compartir. si tu eres la autora entonces escribe tu correo y nombre para que podamos contactarte. ",
    text3_1: "Escribe el título de tu artículo y selecciona tres temas con los que esté relacionado tu artículo. Estas categorías ayudarán a nuestras usuarias a encontrar con mayor facilidad la información o meterial de apoyo que necesiten.",
    text3_2: "Selecciona tres categorías o temas con las que esté relacionado tu articulo. Estas etiquetas servirán para referenciar y dar a concer tu publicación.",
    text4: "Escribe la primera sección de tu Blog. Recuerda que tienes hasta 3 secciones de 500 palabras para escribir tu árticulo. Sólo esta primera sección es obligatoria",
    text5: "Escribe la primera sección de tu Blog. Recuerda que tienes hasta 3 secciones de 500 palabras para escribir tu árticulo. Esta  sección NO es obligatoria pero se recomienda completarla para darle más contendio a tu publicación.",
    text6:"Escribe la primera sección de tu Blog. Recuerda que tienes hasta 3 secciones de 500 palabras para escribir tu árticulo. Esta  sección NO es obligatoria",
    textend:"Gracias por tomarte el tiempo de llenar este cuestionario. Una de nuestras asesoras se pondrá en contacto contigo para darle seguimiento a la publicación de tu blog.",

    author : "Nombre de la autora",
    apellidoauthor: "Apellido de la autora",
    emailauthor : "Correo  de la autora:",
    coauthor : "Nombre de la co-autora (opcional)",
    apellidocoauthor : "Apellido de la co-autora (opcional*)",

    articleTitle: "Escribe el título principal de tu artículo",
    cover: "Elige una foto de portada para tu blog",
    abstract: "Escribe una breve descripción de tu articulo o una nota de presentación",

    subtitle1: "Escribe un subtítulo para esta sección (obligatorio).",
    section1: "Escribe la primera sección de tu árticulo (obligatorio).",
    section1img: "Elige una imagen para esta sección (opcional*)",

    subtitle2: "Escribe un subtítulo para esta sección (opcional).",
    section2: "Escribe la segunda sección de tu árticulo (obligatorio).",
    section2img: "Elige una imagen para esta sección (opcional)",

    subtitle3: "Escribe un subtítulo para esta sección (opcional).",
    section3: "Escribe la tercera sección de tu árticulo (opcional)",
    section3img: "Elige una imagen para esta sección (opcional)",
  },


  RecomendationFormContent: {
    titlestart: "Bienvenido al sistema inteligente de recomendación de Amaru",
    title1: "Nombre.", 
    title2: "Personalidad.", 
    title3: "Preferencias", 
    title4: "Cuéntanos de ti", 


    textstart1:"Este sistema de recoemendación esta diseñado crear tu encuadre psicológico y hacerte mejores recomendaciones para tomar terapia, leer artículos  ",
    textstart2:"Nuestra mejor recomendación es que no dejes de tomar tu asesoría psicologica. Si bien, este formulario es una gran herramienta para encontrar a tu psicóloga ideal, tambien es de gran ayuda hablar con alguna de nuestras expertas para resolver tus dudas. La asesoría es gratuita, estamos para escucharte. ",
    textstart3:"Al llenar este formulario estarás aceptando los términos de uso y condiciones. Consulta los avisos de privacidad para más información",

    text1:"Ayudanos a contestar la siguiente información antes de inciar con el test",
    text2:"Contesta la siguiente sección de opción múltiple seleccionando la respuesta con la que te sientas más identificado.",
    text3:"Contesta la siguiente sección de opción múltiple seleccionando la respuesta con la que te sientas más identificado.",
    text4:"En esta sección abrimos un espacio para que nos cuentes un poco de porque quieres tomar terapia. Recuerda que puedes llenar este cuestionario de manera anónima si asi lo prefieres. ",
    
    textend:"Gracias por tomarte el tiempo de llenar este cuestionario. Una de nuestras asesoras se pondrá en contacto contigo para llevar a acabo el proceso de certificación.",

    nombre: "Nombre",
    apellidoauthor: "Apellido",
    email : "Correo: Te mandaremos una copia de tu recomendación a tu correo",



  },



ScheduleSectionContent: {
  logo : "/img/logo-white.png",
  date: "Fecha",
  service: "Servicio",
  facebook: "Facebook",
  twitter: "Twitter",
  firstname: "Nombre",
  lastname: "Apellido",
  email: "Email",
  line1: "Dirección",
  line2: "Segunda Dirección",
  postal_code: "Codigo Postal",
  city: "Ciudad",
  country: null,
  currency: null,
  amount: "Cantidad",
},

  ThankYouSectionContent:{
    heading: "Quiénes somos",
    content: "Somos un grupo de personas enfocadas en proveer servicios de salud mental con perspectiva de género para mujeres. Comprendemos que la estructura social en la que vivimos afecta a las mujeres de formas particulares, sin embargo, las soluciones ofrecidas en la terapia tradicional no están enfocadas en comprender dichas problemáticas. A través de Amaru buscamos crear un espacio seguro donde las mujeres puedan encontrar psicólogas capacitadas en temas de género que incorporen este conocimiento a los diferentes tipos de terapia que ofrecen, con la finalidad de que las mujeres puedan encontrar comprensión y herramientas enfocadas a las situaciones que viven día con día.",
    btnText: "Regresar al inicio"
  },

  CounterSectionContent: {  
    data : [
      {
        count: "10",
        countHeading: "M",
        title:  "Users"
      },
      {
        count: "23",
        countHeading: "K",
        title:  "Download"
      },
      {
        count: "9",
        countHeading: "M",
        title:  "Customer"
      },
      {
        count: "12",
        countHeading: "K",
        title:  "Developer"
      }
    ]
    
  },

  ScreenshotSectionContent: {
    iconClass: "far fa-lightbulb text-primary mr-1",
    preHeading: "Una plataforma pensada en ti",
    preHeadingspan: "Espacio para mujeres",
    heading: "Terapia con perspectiva de género",
    headingText: "Queremos brindarte la atención que mereces ofreciendo un espacio seguro con perspectiva de género interseccional.",
    headingTexttwo: "Comparte, sientete libre en tu espacio.",
    data : [
      {
        image: "/img/screenshot_1.jpg"
      },
      {
        image: "/img/screenshot_2.jpg"
      },
      {
        image: "/img/screenshot_3.jpg"
      },
      {
        image: "/img/screenshot_4.jpg"
      },
      {
        image: "/img/screenshot_5.jpg"
      }
    ]
  
  },

  BrandbannerSectionContent: {
    iconClass: "",
    preHeading: "",
    preHeadingspan: "",
    heading: "Una empresa respaldada por:",
    headingText: "",
    headingTexttwo: "",
    data : [
      {
        image: "/img/brandbanner_1.png",
        href: 'https://www.epiclab.itam.mx/emprendedores-epic-lab'
      },
      {
        image: "/img/brandbanner_2.png",
        href: 'https://atomic88.com/alibaba-get-global-challenge/'

      },
      {
        image: "/img/brandbanner_3.png",
        href: 'https://www.emprendiendodesdecero.com/'

      },
      {
        image: "/img/brandbanner_4.png",
        href: 'https://www.youtube.com/watch?v=yVKaf6xtmFU'
      },
      {
        image: "/img/brandbanner_5.png",
        href: 'https://www.youtube.com/watch?v=L8hbmqzw3cg&t=2s'

      }
    ]
  
  },


  ReviewSectionContent: {
      heading: "Opiniones de nuestras usuarias",
      headingText: "",
      //headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
      data : [
        {
          id: "1",
          //avatorImg: "/img/avatar-1.png",
          reviewer: "Ingrid Vargas",
          post: "",
          text: "Gracias a Amaru volví a retomar la terapia psicológica y lo importante que es el autoconocimiento. Hoy me siento más feliz, escuchada y comprendida.",
          comments: "Encontré el espacio que que me hacía falta",
          quotIcon: "/img/quote.png",
          icon_1: "fas fa-star text-warning",
          icon_2: "fas fa-star text-warning",
          icon_3: "fas fa-star text-warning",
          icon_4: "fas fa-star text-warning",
          icon_5: "fas fa-star text-warning"
        },
        {
          id: "2",
          //avatorImg: "/img/avatar-2.png",
          reviewer: "Karen Valencia",
          post: "",
          text: "Amaru apareció en tiempos complicados y fué la perfecta alternativa para regresar a mi centro y mi felicidad de la manera más cómoda y bonita posible. Entrar a este proceso fue de gran importancia y agradezco poder seguir contando con su apoyo para seguir en este camino de la salud mental",
          comments: "Un gran soporte cuándo necesitaba más ayuda.",
          quotIcon: "/img/quote.png",
          icon_1: "fas fa-star text-warning",
          icon_2: "fas fa-star text-warning",
          icon_3: "fas fa-star text-warning",
          icon_4: "fas fa-star text-warning",
          icon_5: "fas fa-star text-warning" //"fas fa-star-half-alt text-warning"
        },
        {
          id: "3",
          //avatorImg: "/img/avatar-3.png",
          reviewer: "Daniela Martín",
          post: "",
          text: "El servicio de asesoría de Amaru me ayudó mucho a conocer más sobre la terapia y a elegir mejor a mi psicóloga. Me sentí muy a gusto durante las sesiones y el trato siempre fue amable y en un ambiente lleno de confianza.",
          comments: "¡Me encanta!",
          quotIcon: "/img/quote.png",
          icon_1: "fas fa-star text-warning",
          icon_2: "fas fa-star text-warning",
          icon_3: "fas fa-star text-warning",
          icon_4: "fas fa-star text-warning",
          icon_5: "fas fa-star text-warning"
        }
      ]

  },

  //------------------- SCHEDULE INVITE-------------------------
  ScheduleInviteSection :{
    heading: "Asesoría gratuita",
    headingText: "Comprometidos con nuestra misión social, Amaru ofrece asesoría psicológica gratuita. Habla hoy con una de nuestras asesoras expertas que te ayudarán a encontrar la mejor psicóloga para ti ",
    headingTexttwo: "Nuestra garantía es que encontrarás esa compañera que estará lista para escucharte y entenderte. Cambia de psicóloga y prueba tu terapia si ningún costo adicional.",
    headingSlug: "* Agenda haciendo click y llenando un breve formulario",
    playImg: "/img/inviteschedule.png",
    //appleImg: "/img/app-store.png",
  },

  ForgotSection :{
    heading: "¿Olvidaste tu contraseña?",
    content: "Ingresa tu correo para resetear tu contrseña. Recibiras un correo con instrucciones para cambiar tu contraseña",
    btnText: "Cambiar contraseña"
},


  //-----------------ASESORIA PAYMENT COMPLETED -------------------------
  PaymentCompleteSection :{
    content: "Estás a un paso de apartar tu cita, ponte en contacto con tu asesora escribiendonos por WhatsApp al +52 9511807967 o has click en el siguiente botón para apartar el espacio con tu psicóloga recomendada",
    heading: "Felicidades!  tu pago ha sido confirmado",
    //link: "here",
    //content_2: "to downlaod manually.",
    image: "/img/payment_completed.png"
  },

  PaymentErrorSection :{
    content: "Ha surgido un error al momento de realizar tu pago. Intenta nuevamente en unos minutos o ingresa un método de pago diferente. ",
    heading: "ERROR  tu pago no pudo ser procesado",
    //link: "here",
    //content_2: "to downlaod manually.",
    image: "/img/payment_completed.png"
  },

  ContactCompletedSection :{
    content: "En un lapso de 24 horas una de nuestras asesoras se pondrá en contacto contigo para responder tus dudas.",
    heading: "Tu mensaje ha sido enviado",
    //link: "here",
    //content_2: "to downlaod manually.",
    image: "/img/payment_completed.png"
  },
  

  AsesoriaCompleteSection :{
    content: "Felicidades, Has agendado una cita con una de nuestras asesoras expertas. Recuerda estar 5 minutos antes en el link que se acaba de enviar a tu correo. Nuestras asesora estará ahi para escucharte y encontrar la mejor psicòloga para ti.",
    heading: "¡Asesoría psicológica confirmada!",
    //link: "here",
    //content_2: "to downlaod manually.",
    image: "/img/asesoria_completed.png"
  },

  FeaturesImagesContent: {
    preHeading: "Premium",
    preHeadingspan: "Features",
    heading: "¿Quiénes somos?",
    headingTwo: "Terapia psicológica pensada en tu",
    headingThree: "Descubre cómo encontramos la mejor psicóloga para ti",
    headingFour: "¿Porqué elegir Amaru?",
    headingText: "Somos un grupo de personas que busca crear un espacio seguro para la atención de la salud mental de las mujeres, con un enfoque en los temas sociales y estructurales que las afectan de manera cotidiana.",
    headingTexttwo: "Nuestras psicologas y asesoras están certificadas y preaparadas para escucharte y ayudarte.",
    //featureThumb: "/img/features_thumb.png",
    button: 'Conócenos',
    "loadMessage_signed":"Te queremos contar nuestra historia...", 
    "loadHeader_signed":"Cargando",


    featureData: [
        {
          "id": 1,
          "image": "/img/incluia_prosperia.gif",
          "title": "Terapia personalizada",
          "text": "Te ayudamos a encontrar el enfoque y la psicóloga ideal para ti y tu proceso por medio de nuestra asesoría gratuita inicial."
        },
        {
          "id": 2,
          "image": "/img/featured_image_2.jpg",
          "title": "Enfoque en mujeres",
          "text": "Nuestras psicólogas están capacitadas para tratar tu sesión desde una perspectiva interseccional y de género."
        },
        {
          "id": 3,
          "image": "/img/featured_image_3.jpg",
          "title": "Espacio seguro",
          "text": "Ten la confianza de que protegeremos tu información. Toda conversación entre tú y tu terapeuta será 100% confidencial."
        }
    ],
    "featureData_1": [
        {
            "id": 1,
            "image": "/img/featured_image_4.jpg",
            "title": "Easy to Customize",
            "text": "Amaru | terapia psicológica"
          },
          {
            "id": 2,
            "image": "/img/featured_image_5.jpg",
            "title": "Responsive Design",
            "text": "Amaru | perspectiva de género"
          },
          {
            "id": 3,
            "image": "/img/featured_image_6.jpg",
            "title": "Help Documentation",
            "text": "Amaru |  Tu psic'ologa ideal"
          }
    ],
    "featureDataTwo": [
        {
            "id": 1,
            "iconClass": "flaticon-tap",
            "title": "Fully functional",
            "text": "Amaru | Espacio seguro"
        },
        {
            "id": 2,
            "iconClass": "flaticon-fingerprint",
            "title": "Fingerprint Data",
            "text": "Amaru | Espacio libre de juicios"
        },
        {
            "id": 3,
            "iconClass": "flaticon-notification",
            "title": "Tap Notification",
            "text": "Amaru | Espacio para mujeres."
        },
        {
            "id": 4,
            "iconClass": "flaticon-place",
            "title": "Ubicación",
            "text": "Amaru | Terapia segura."
        },
        {
            "id": 5,
            "iconClass": "flaticon-settings",
            "title": "Powerful Settings",
            "text": "Amaru | Psicólogos con maestría."
        },
        {
            "id": 6,
            "iconClass": "flaticon-language",
            "title": "Multiple Language",
            "text": "Amaru | Psicólogos con certificados."
        }
    ], 
    imageData : [
      {
          id: "1",
          image: "/img/screenshot_1.jpg"
      },
      {
          id: "2",
          image: "/img/screenshot_2.jpg"
      },
      {
          id: "3",
          image: "/img/screenshot_3.jpg"
      },
      {
          id: "4",
          image: "/img/screenshot_4.jpg"
      }
  ]
  },    

    "InfoTextImageOne":     {
      "heading": "Psicólogas",
      "headingTwo": "Share your photos with friends easily",
      "headingThree": "Smart and secure mobile banking",
      "headingFour": "More productivity with less effort",
      "headingFive": "Organize all your media content easily",
      "headingSix": "Work faster with powerful filters",
      "headingSeven": "Stay connected with all of your friends",
      "buttonText": "Learn More",
      "thumbOne": "/img/asesoria_completed.jpg",
      "thumbSix": "/img/discover_thumb_2.png",
      'button':"Conoce tu próxima psicóloga",
      "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar a tu psicóloga", 
      "loadHeader_signed":"Buscando Psicólogas",
      "serviceData": [
          {
              "id": 1,
              "iconClass": "fas fa-award",
              "text": "Todas las psicólogas pasan por un proceso de selección realizado por Amaru para validar su experiencia en el área clínica."
          },
          {
            "id": 2,
            "iconClass": "fas fa-check-circle ",
            "text": "Las psicólogas de Amaru tienen maestría en su área de especialización y cuentan con el conocimiento necesario para abordar las sesiones desde una perspectiva de género."
        },
        {
            "id": 3,
            "iconClass": "fas fa-tasks",
            "text": "En Amaru manejamos diferentes enfoques como: Terapia psicoanálisis, Psicodrama, Cognitivo Conductual, Humanista, Terapia Psicodinámica y Terapia Sistémica."
        },
      ]
  },

  "InfoTextImageOne":     {
    "heading": "Psicólogas",
    "headingTwo": "Share your photos with friends easily",
    "headingThree": "Smart and secure mobile banking",
    "headingFour": "More productivity with less effort",
    "headingFive": "Organize all your media content easily",
    "headingSix": "Work faster with powerful filters",
    "headingSeven": "Stay connected with all of your friends",
    "buttonText": "Learn More",
    "thumbOne": "/img/asesoria_completed.jpg",
    "thumbSix": "/img/discover_thumb_2.png",
    'button':"Conoce tu próxima psicóloga",
    "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar a tu psicóloga", 
    "loadHeader_signed":"Buscando Psicólogas",
    "serviceData": [
        {
            "id": 1,
            "iconClass": "fas fa-award",
            "text": "Todas las psicólogas pasan por un proceso de selección realizado por Amaru para validar su experiencia en el área clínica."
        },
        {
          "id": 2,
          "iconClass": "fas fa-check-circle ",
          "text": "Las psicólogas de Amaru tienen maestría en su área de especialización y cuentan con el conocimiento necesario para abordar las sesiones desde una perspectiva de género."
      },
      {
          "id": 3,
          "iconClass": "fas fa-tasks",
          "text": "En Amaru manejamos diferentes enfoques como: Terapia psicoanálisis, Psicodrama, Cognitivo Conductual, Humanista, Terapia Psicodinámica y Terapia Sistémica."
      },
    ]
},


"InfoTextImageTwo":     {
    "heading": "Psicólogas",
    "headingTwo": "Share your photos with friends easily",
    "headingThree": "Smart and secure mobile banking",
    "headingFour": "More productivity with less effort",
    "headingFive": "Organize all your media content easily",
    "headingSix": "Work faster with powerful filters",
    "headingSeven": "Stay connected with all of your friends",
    "buttonText": "Learn More",
    "thumbOne": "/img/asesoria_completed.jpg",
    "thumbSix": "/img/discover_thumb_2.png",
    'button':"Conoce tu próxima psicóloga",
    "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar a tu psicóloga", 
    "loadHeader_signed":"Buscando Psicólogas",
    "serviceData": [
        {
            "id": 1,
            "iconClass": "fas fa-award",
            "text": "Todas las psicólogas pasan por un proceso de selección realizado por Amaru para validar su experiencia en el área clínica."
        },
        {
          "id": 2,
          "iconClass": "fas fa-check-circle ",
          "text": "Las psicólogas de Amaru tienen maestría en su área de especialización y cuentan con el conocimiento necesario para abordar las sesiones desde una perspectiva de género."
      },
      {
          "id": 3,
          "iconClass": "fas fa-tasks",
          "text": "En Amaru manejamos diferentes enfoques como: Terapia psicoanálisis, Psicodrama, Cognitivo Conductual, Humanista, Terapia Psicodinámica y Terapia Sistémica."
      },
    ]
},


"InfoTextImageThree":     {
    "heading": "Psicólogas",
    "headingTwo": "Share your photos with friends easily",
    "headingThree": "Smart and secure mobile banking",
    "headingFour": "More productivity with less effort",
    "headingFive": "Organize all your media content easily",
    "headingSix": "Work faster with powerful filters",
    "headingSeven": "Stay connected with all of your friends",
    "buttonText": "Learn More",
    "thumbOne": "/img/asesoria_completed.jpg",
    "thumbSix": "/img/discover_thumb_2.png",
    'button':"Conoce tu próxima psicóloga",
    "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar a tu psicóloga", 
    "loadHeader_signed":"Buscando Psicólogas",
    "serviceData": [
        {
            "id": 1,
            "iconClass": "fas fa-award",
            "text": "Todas las psicólogas pasan por un proceso de selección realizado por Amaru para validar su experiencia en el área clínica."
        },
        {
          "id": 2,
          "iconClass": "fas fa-check-circle ",
          "text": "Las psicólogas de Amaru tienen maestría en su área de especialización y cuentan con el conocimiento necesario para abordar las sesiones desde una perspectiva de género."
      },
      {
          "id": 3,
          "iconClass": "fas fa-tasks",
          "text": "En Amaru manejamos diferentes enfoques como: Terapia psicoanálisis, Psicodrama, Cognitivo Conductual, Humanista, Terapia Psicodinámica y Terapia Sistémica."
      },
    ]
},

"InfoTextImageFour":     {
    "heading": "Psicólogas",
    "headingTwo": "Share your photos with friends easily",
    "headingThree": "Smart and secure mobile banking",
    "headingFour": "More productivity with less effort",
    "headingFive": "Organize all your media content easily",
    "headingSix": "Work faster with powerful filters",
    "headingSeven": "Stay connected with all of your friends",
    "buttonText": "Learn More",
    "thumbOne": "/img/asesoria_completed.jpg",
    "thumbSix": "/img/discover_thumb_2.png",
    'button':"Conoce tu próxima psicóloga",
    "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar a tu psicóloga", 
    "loadHeader_signed":"Buscando Psicólogas",
    "serviceData": [
        {
            "id": 1,
            "iconClass": "fas fa-award",
            "text": "Todas las psicólogas pasan por un proceso de selección realizado por Amaru para validar su experiencia en el área clínica."
        },
        {
          "id": 2,
          "iconClass": "fas fa-check-circle ",
          "text": "Las psicólogas de Amaru tienen maestría en su área de especialización y cuentan con el conocimiento necesario para abordar las sesiones desde una perspectiva de género."
      },
      {
          "id": 3,
          "iconClass": "fas fa-tasks",
          "text": "En Amaru manejamos diferentes enfoques como: Terapia psicoanálisis, Psicodrama, Cognitivo Conductual, Humanista, Terapia Psicodinámica y Terapia Sistémica."
      },
    ]
},


  'EventSectionContent' :{ //TODO: Add Image to /evento-del-mes url and event description
    heading: "Evento del mes",
    content: "Al formar parte de la comunidad Amaru podrás asistir a nuestras conferencias, workshops y pláticas de psicología y perspectiva de género.",
    btnText: "Subscribete ahora"
},

      "InfoImageTextOne": {
          "heading": "¿Por qué Amaru?",
          "headingTwo": "Espacio seguro con psicologes capacitados y preparados.",
          "headingThree": "Terapia inclusiva, libre y segura.",
          "headingText": "Nacemos por la necesidad de contar con espacios donde la salud mental de las mujeres sea tratada con la importancia que merece, y que no siempre recibe. Es por eso que nuestras terapias buscan priorizarlas y empoderarlas a nivel personal y social.          ",
          "thumbOne": "/img/discover_thumb.jpg",
          "thumbTwo": "/img/discover_thumb_3.jpg",
          'button':'Agendar mi asesoría gratuita',
          "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar una psicóloga", 
          "loadHeader_signed":"Buscando Asesoras",
    
          "discoverData": [
              {
                  "id": 1,
                  "iconClass": "fas fa-check",
                  "text": "Trabajamos desde una perspectiva de género y perspectiva interseccional."
              },
              {
                  "id": 2,
                  "iconClass": "fas fa-check",
                  "text": "Reconocemos, respetamos y abrazamos la diversidad de ideas y preferencias."
              },
              {
                  "id": 3,
                  "iconClass": "fas fa-check",
                  "text": "Nuestras psicólogas se capacitan constantemente para ofrecer terapia con información actualizada, tomando en cuenta el contexto sociocultural."
              },
              {
                  "id": 4,
                  "iconClass": "fas fa-check",
                  "text": "Ofrecemos un espacio seguro para que las mujeres sean escuchadas y puedan trabajar en cada uno de sus procesos."
              }
          ],
          "discoverIcon": [
              {
                  "id": 1,
                  "iconClass": "fas fa-bell"
              },
              {
                  "id": 2,
                  "iconClass": "fas fa-envelope-open"
              },
              {
                  "id": 3,
                  "iconClass": "fas fa-video"
              }
          ]
      },

      "InfoImageTextOne": {
        "heading": "¿Por qué Amaru?",
        "headingTwo": "Espacio seguro con psicologes capacitados y preparados.",
        "headingThree": "Terapia inclusiva, libre y segura.",
        "headingText": "Nacemos por la necesidad de contar con espacios donde la salud mental de las mujeres sea tratada con la importancia que merece, y que no siempre recibe. Es por eso que nuestras terapias buscan priorizarlas y empoderarlas a nivel personal y social.          ",
        "thumbOne": "/img/discover_thumb.jpg",
        "thumbTwo": "/img/discover_thumb_3.jpg",
        'button':'Agendar mi asesoría gratuita',
        "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar una psicóloga", 
        "loadHeader_signed":"Buscando Asesoras",
  
        "discoverData": [
            {
                "id": 1,
                "iconClass": "fas fa-check",
                "text": "Trabajamos desde una perspectiva de género y perspectiva interseccional."
            },
            {
                "id": 2,
                "iconClass": "fas fa-check",
                "text": "Reconocemos, respetamos y abrazamos la diversidad de ideas y preferencias."
            },
            {
                "id": 3,
                "iconClass": "fas fa-check",
                "text": "Nuestras psicólogas se capacitan constantemente para ofrecer terapia con información actualizada, tomando en cuenta el contexto sociocultural."
            },
            {
                "id": 4,
                "iconClass": "fas fa-check",
                "text": "Ofrecemos un espacio seguro para que las mujeres sean escuchadas y puedan trabajar en cada uno de sus procesos."
            }
        ],
        "discoverIcon": [
            {
                "id": 1,
                "iconClass": "fas fa-bell"
            },
            {
                "id": 2,
                "iconClass": "fas fa-envelope-open"
            },
            {
                "id": 3,
                "iconClass": "fas fa-video"
            }
        ]
    },

    "InfoImageTextTwo": {
        "heading": "¿Por qué Amaru?",
        "headingTwo": "Espacio seguro con psicologes capacitados y preparados.",
        "headingThree": "Terapia inclusiva, libre y segura.",
        "headingText": "Nacemos por la necesidad de contar con espacios donde la salud mental de las mujeres sea tratada con la importancia que merece, y que no siempre recibe. Es por eso que nuestras terapias buscan priorizarlas y empoderarlas a nivel personal y social.          ",
        "thumbOne": "/img/discover_thumb.jpg",
        "thumbTwo": "/img/discover_thumb_3.jpg",
        'button':'Agendar mi asesoría gratuita',
        "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar una psicóloga", 
        "loadHeader_signed":"Buscando Asesoras",
  
        "discoverData": [
            {
                "id": 1,
                "iconClass": "fas fa-check",
                "text": "Trabajamos desde una perspectiva de género y perspectiva interseccional."
            },
            {
                "id": 2,
                "iconClass": "fas fa-check",
                "text": "Reconocemos, respetamos y abrazamos la diversidad de ideas y preferencias."
            },
            {
                "id": 3,
                "iconClass": "fas fa-check",
                "text": "Nuestras psicólogas se capacitan constantemente para ofrecer terapia con información actualizada, tomando en cuenta el contexto sociocultural."
            },
            {
                "id": 4,
                "iconClass": "fas fa-check",
                "text": "Ofrecemos un espacio seguro para que las mujeres sean escuchadas y puedan trabajar en cada uno de sus procesos."
            }
        ],
        "discoverIcon": [
            {
                "id": 1,
                "iconClass": "fas fa-bell"
            },
            {
                "id": 2,
                "iconClass": "fas fa-envelope-open"
            },
            {
                "id": 3,
                "iconClass": "fas fa-video"
            }
        ]
    },

    "InfoImageTextThree": {
        "heading": "¿Por qué Amaru?",
        "headingTwo": "Espacio seguro con psicologes capacitados y preparados.",
        "headingThree": "Terapia inclusiva, libre y segura.",
        "headingText": "Nacemos por la necesidad de contar con espacios donde la salud mental de las mujeres sea tratada con la importancia que merece, y que no siempre recibe. Es por eso que nuestras terapias buscan priorizarlas y empoderarlas a nivel personal y social.          ",
        "thumbOne": "/img/discover_thumb.jpg",
        "thumbTwo": "/img/discover_thumb_3.jpg",
        'button':'Agendar mi asesoría gratuita',
        "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar una psicóloga", 
        "loadHeader_signed":"Buscando Asesoras",
  
        "discoverData": [
            {
                "id": 1,
                "iconClass": "fas fa-check",
                "text": "Trabajamos desde una perspectiva de género y perspectiva interseccional."
            },
            {
                "id": 2,
                "iconClass": "fas fa-check",
                "text": "Reconocemos, respetamos y abrazamos la diversidad de ideas y preferencias."
            },
            {
                "id": 3,
                "iconClass": "fas fa-check",
                "text": "Nuestras psicólogas se capacitan constantemente para ofrecer terapia con información actualizada, tomando en cuenta el contexto sociocultural."
            },
            {
                "id": 4,
                "iconClass": "fas fa-check",
                "text": "Ofrecemos un espacio seguro para que las mujeres sean escuchadas y puedan trabajar en cada uno de sus procesos."
            }
        ],
        "discoverIcon": [
            {
                "id": 1,
                "iconClass": "fas fa-bell"
            },
            {
                "id": 2,
                "iconClass": "fas fa-envelope-open"
            },
            {
                "id": 3,
                "iconClass": "fas fa-video"
            }
        ]
    },


    "InfoImageTextFour": {
        "heading": "¿Por qué Amaru?",
        "headingTwo": "Espacio seguro con psicologes capacitados y preparados.",
        "headingThree": "Terapia inclusiva, libre y segura.",
        "headingText": "Nacemos por la necesidad de contar con espacios donde la salud mental de las mujeres sea tratada con la importancia que merece, y que no siempre recibe. Es por eso que nuestras terapias buscan priorizarlas y empoderarlas a nivel personal y social.          ",
        "thumbOne": "/img/discover_thumb.jpg",
        "thumbTwo": "/img/discover_thumb_3.jpg",
        'button':'Agendar mi asesoría gratuita',
        "loadMessage_signed":"Nuestras asesoras te ayduarán a encontrar una psicóloga", 
        "loadHeader_signed":"Buscando Asesoras",
  
        "discoverData": [
            {
                "id": 1,
                "iconClass": "fas fa-check",
                "text": "Trabajamos desde una perspectiva de género y perspectiva interseccional."
            },
            {
                "id": 2,
                "iconClass": "fas fa-check",
                "text": "Reconocemos, respetamos y abrazamos la diversidad de ideas y preferencias."
            },
            {
                "id": 3,
                "iconClass": "fas fa-check",
                "text": "Nuestras psicólogas se capacitan constantemente para ofrecer terapia con información actualizada, tomando en cuenta el contexto sociocultural."
            },
            {
                "id": 4,
                "iconClass": "fas fa-check",
                "text": "Ofrecemos un espacio seguro para que las mujeres sean escuchadas y puedan trabajar en cada uno de sus procesos."
            }
        ],
        "discoverIcon": [
            {
                "id": 1,
                "iconClass": "fas fa-bell"
            },
            {
                "id": 2,
                "iconClass": "fas fa-envelope-open"
            },
            {
                "id": 3,
                "iconClass": "fas fa-video"
            }
        ]
    },
      "WorkSectionContent": {
          "heading": "¿Cómo funciona?",
                    "workData": [
              {
                  "id": 1,
                  "image": "/img/work_thumb_1.png",
                  "title": "Asesoría gratuita",
                  "content": "Contesta un breve cuestionario y agenda tu llamada de orientación para resolver todas tus dudas."
              },
              {
                  "id": 2,
                  "image": "/img/work_thumb_2.png",
                  "title": "  Recomendación personalizada",
                  "content": "Dependiendo de tus necesidades te haremos una recomendación sobre la psicóloga y el enfoque ideal para ti."
              },
              {
                  "id": 3,
                  "image": "/img/work_thumb_3.png",
                  "title": "Terapia en línea",
                  "content": "¡Felicidades por dar este paso! Todo está listo para comenzar tu primera sesión."
              }
          ]
      },

      "PricingSectionContent": {
          "iconClass": "far fa-lightbulb text-primary mr-1",
          "preHeading": "Flexible",
          "preHeadingspan": "Precios",
          "heading": "Costos y paquetes",
          "headingText": "Conoce las opciones que tenemos para ti.",
          "headingTexttwo": "Costos y paquetes, terapia psicológica Amaru",
          "text": "¿No sabes qué paquete elegir?",
          "textLink": "Contacto",

          "loadMessage_signed":"Cargando plataforma de pagos ...", 
          "loadHeader_signed":"Cargando",
          "loadMessage_notSigned":'Para realizar tu pago necesitas iniciar sesión o crear una cuenta con nosotras',
          "loadHeader_notSigned":'Inicia Sesión',
          "loadButtonText" : 'Continuar',
          "loadButtonLink":'/login',

          "pricingData": [
              {
                  "id": 1,
                  "planImage": "/img/price_1.jpg",
                  "planTitle": "1 Terapia 60 min",
                  "priceSub": "",
                  "planPrice": "$600 MXN",
                  "planBtn": "Comienza hoy",
                  "li_1": "1 Terapia con una psicóloga certificada por Amaru",
                  "li_2": "1 Asesoría de seguimiento",
                  "li_3": "Actividades y workshops gratuitos",
                  "li_4": "", 
                  'productName': 'therapy_1'
              },
              {
                  "id": 2,
                  "planImage": "/img/price_4.jpg",
                  "planTitle": "4 Terapias 60 min",
                  "priceSub": "",
                  "planPrice": "$2,400 MXN",
                  "planBtn": "Comienza hoy",
                  "li_1": "4 Terapias con una psicóloga certificadas por Amaru",
                  "li_2": "2 Asesorías de seguimiento",
                  "li_3": "Actividades y workshops gratuitos",
                  "li_4": "",
                  'productName': 'therapy_4'

              },
              {
                "id": 3,
                "planImage": "/img/price_8.jpg",
                "planTitle": "8 Terapias 60 min",
                "priceSub": "",
                "planPrice": "$4,800 MXN",
                "planBtn": "Comienza hoy",
                "li_1": "8 Terapias con una psicóloga certificadas por Amaru",
                "li_2": "4 asesorías de seguimiento",
                "li_3": "Actividades y workshops gratuitos",
                "li_4": "",
                'productName': 'therapy_8'

            }
          ]
      },
      "FaqSectionContent": {
          "heading": "Frequently asked questions",
          "headingTwo": "Preguntas frecuentes",
          "faqText": "Haven't find suitable answer?",
          "faqTextLink": "Tell us what you need.",
          'image':"/img/logo-white.png",
          "faqData": [
              {
                  "id": 1,
                  "title": "¿Cómo funciona Amaru?",
                  "content": "Amaru es una plataforma que ofrece terapia en línea. Te ayudamos a encontrar a la mejor psicóloga, según tus necesidades, a través de nuestras asesorías gratuitas. Puedes agendar tu cita en el día y horario que mejor se adapten a ti."
              },
              {
                  "id": 2,
                  "title": "¿Cómo funciona la terapia en línea?",
                  "content": "La terapia en línea es un asesoramiento que brinda una psicóloga a su paciente a través de Internet. Uno de los mejores beneficios de la terapia en línea es que la psicóloga se mantiene siempre con el paciente y está disponible desde cualquier lugar. Las terapeutas en línea tienen la práctica y las competencias que se esperarían de una terapeuta convencional, ya que estos se rigen por los mismos estándares y emplean los mismos métodos de ayuda que en una consulta tradicional."
              },
              {
                  "id": 3,
                  "title": "¿Cómo eligen a mi posible psicóloga?",
                  "content": "Asignamos a tu psicóloga con ayuda de un cuestionario y por medio de la llamada de asesoría psicológica. Esto nos ayuda a entender mejor las necesidades que tienes. Con esta información te daremos algunas opciones para que decidas con quién quieres agendar tu primera sesión."
              }
          ],
          "faqDataTwo": [
              {
                  "id": 1,
                  "title": "¿Qué pasa si no me siento a gusto con mi psicóloga?",
                  "content": "Después de tu primera sesión te enviaremos una breve encuesta de satisfacción, en ella podrás contarnos cómo te sentiste y, en caso de ser necesario, te ayudaremos a cambiar de psicóloga. Para nosotrxs lo más importante es que te sientas cómoda en todo tu proceso."
              },
              {
                  "id": 2,
                  "title": "¿Atendemos cualquier tipo de problema psicológico?",
                  "content": "Nuestras psicólogas están capacitadas para atender distintos temas como:"
              },
          ],
          "faqDataThree": [
              {
                  "id": 1,
                  "title": "¿Cómo funciona Amaru?",
                  "content":  'Amaru es una plataforma que ofrece terapia en línea. Te ayudamos a encontrar a la mejor psicóloga, según tus necesidades, a través de nuestras asesorías gratuitas. Puedes agendar tu cita en el día y horario que mejor se adapten a ti.'
                },
              {
                  "id": 2,
                  "title": "¿Cómo funciona la terapia en línea? ",
                  "content": 'La terapia en línea es un asesoramiento que brinda una psicóloga a su paciente a través de Internet. \n\nUno de los mejores beneficios de la terapia en línea es que la psicóloga se mantiene siempre con el paciente y está disponible desde cualquier lugar.\nLas terapeutas en línea tienen la práctica y las competencias que se esperarían de una terapeuta convencional, ya que estos se rigen por los mismos estándares y emplean los mismos métodos de ayuda que en una consulta tradicional.'
                },
              {
                  "id": 3,
                  "title": "¿Cómo eligen a mi posible psicóloga?",
                  "content": "Asignamos a tu psicóloga con ayuda de un cuestionario y por medio de la llamada de asesoría psicológica. Esto nos ayuda a entender mejor las necesidades que tienes. Con esta información nuestras asesoras te presentarán dos recomendaciones para que decidas con quién quieres agendar tu primera sesión. "
              },
              {
                  "id": 4,
                  "title": "¿Qué pasa si no me siento a gusto con mi psicóloga?",
                  "content": "Después de tu primera sesión te enviaremos una breve encuesta de satisfacción, en ella podrás contarnos cómo te sentiste y, en caso de ser necesario, te ayudaremos a cambiar de psicóloga. La primera asesoría con tu nueva psicóloga  corre por nuestra cuenta, para nosotrxs lo más importante es que te sientas cómoda en todo tu proceso. "
              },
              {
                  "id": 5,
                  "title": "¿Atendemos cualquier tipo de problema psicológico?",
                  "content": "Nuestras psicólogas están capacitadas para atender distintos temas como: •	Abuso verbal, físico o sexual  •	Adicción o abuso de sustancias •	Ansiedad •	Ataques de pánico •	Baja autoestima •	Depresión •	Duelo o pérdida •	Estrés •	LGBTTTIQA+ •	Pandemia •	Problemas alimenticios •	Problemas de pareja •	Problemas económicos •	Problemas en el trabajo o escuela •	Problemas familiares •	Rechazo social •	Ruptura amorosa •	Soledad •	Estoy bien y quiero mejorar"
              }
          ]
      },
      "TeamSectionContent": {
          "heading": "¿Eres psicólogx?",
          "headingText": "En Amaru queremos acompañar a las mujeres en el proceso de mejorar su salud mental y emocional con ayuda de lxs mejores psicólogxs. ¡Únete a nuestro equipo!",
          //"headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
          "teamData": [

              {
                  "id": 1,
                  "image": "/img/avatar-3.jpg",
                  "title": "Carolina Salazar Ramírez",
                  "teamPost": "Dirección de asesoría y terapia psicológica" 
              }
          ],
          "teamIcons": [
              {
                  "id": 1,
                  "iconClass": "fab fa-facebook-f"
              },
              {
                  "id": 2,
                  "iconClass": "fab fa-twitter"
              },
              {
                  "id": 3,
                  "iconClass": "fab fa-google-plus-g"
              },
              {
                  "id": 4,
                  "iconClass": "fab fa-linkedin-in"
              }
          ]
      },
      "ContactSectionContent": {
          "heading": "Contacto",
          "headingText": "Queremos seguir construyendo un espacio pensado en las necesidades de las mujeres. Tus comentarios nos ayudan a lograrlo. Cuéntanos cómo te podemos ayudar hoy.",
          //"headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
          "content": "",
          "iconList": [
              {
                  "id": 1,
                  "iconClass": "fas fa-home",
                  "text": "Los Cedros, Coyoacan, Ciudad de México, 04800"
              },
              {
                  "id": 2,
                  "iconClass": "fas fa-phone-alt",
                  "text": "+52 9511807967"
                  
              },
              {
                  "id": 3,
                  "iconClass": "fas fa-envelope",
                  "text": "asesoria@amaru.mx"
              }
          ]
      },
  
      "AsesoriaSectionContent2": {
        "heading": "ASESORIA",
        "headingText": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
        "headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
        "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "iconList": [
            {
                "id": 1,
                "iconClass": "fas fa-home",
                "text": "Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002"
            },
            {
                "id": 2,
                "iconClass": "fas fa-phone-alt",
                "text": "+1 230 456 789-012 345 6789"
            },
            {
                "id": 3,
                "iconClass": "fas fa-envelope",
                "text": "exampledomain@domain.com"
            }
        ]
    },
  
      "FooterSectionContent": {
          "image": "/img/logo.png",
          "text": "Encuéntranos tambien en:",
          "linkText_1": "Menú",
          "linkText_2": "Contenido Adicional",
          "linkText_3": "Siguenos es nuestras redes",
          "iconList": [
              {
                  "id": 1,
                  "class": "facebook",
                  "iconClass": "fab fa-facebook-f",
                  "link": "https://www.facebook.com/amarutalk",
              },
              {
                  "id": 2,
                  "class": "instagram",
                  "iconClass": "fab fa-instagram",
                  'link':'https://www.instagram.com/amarutalk/?hl=es"'
              },
              {
                  "id": 3,
                  "class": "linkedin",
                  "iconClass": "fab fa-linkedin", 
                  "link":"https://www.linkedin.com/company/amarumx",
              },

          ],
          "footerList_1": [
              {
                  "id": 1,
                  "text": "inico",
                  "link":'/#'
              },
              {
                  "id": 2,
                  "text": "Nosotras",
                  "link":'/about-us'

              },
              {
                  "id": 3,
                  "text": "Asesoria",
                  "link":'/asesoria'

              },
              {
                "id": 4,
                "text": "Precios",
                "link":'/pricing'
            },

              {
                  "id": 5,
                  "text": "Contacto",
                  "link":'/contact'

              },
              {
                "id": 6,
                "text": "Iniciar sesión",
                "link":'/signup'

            }

          ],
          "footerList_2": [

              {
                  "id": 1,
                  "text": "Política de privacidad",
                  'link':'privacy'
              },
              {
                  "id": 2,
                  "text": "Términos y condiciones",
                  'link':'terms-and-conditions'
              },

          ],
          /*"footerList_3": [
              {
                  "id": 1,
                  "image": "/img/google-play-black.png"
              },
              {
                  "id": 2,
                  "image": "/img/app-store-black.png"
              }
          ],*/
          "footerList_4": [
              {
                  "id": 1,
                  "text": "Inicio"
              },
              {
                  "id": 2,
                  "text": "Nosotras"
              },
              {
                  "id": 3,
                  "text": "Asesoria"
              },
              {
                  "id": 4,
                  "text": "Precios"
              },
              {
                "id": 4,
                "text": "Iniciar Sesión"
            }

          ]
      },
      "PhotoProfile": {
          "blogData": [
              {
                  "id": 1,
                  "image": "/img/blog-1.jpg",
                  "author": "Anna Sword",
                  "date": "Feb 05, 2019",
                  "title": "How to grow up your business",
                  "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
                  "btnText": "Read More"
              },
              {
                  "id": 2,
                  "image": "/img/blog-2.jpg",
                  "author": "Jassica William",
                  "date": "Feb 05, 2019",
                  "title": "Planing to manage your clients?",
                  "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.",
                  "btnText": "Read More"
              },
              {
                  "id": 3,
                  "image": "/img/blog-3.jpg",
                  "author": "John Doe",
                  "date": "Mar 05, 2019",
                  "title": "Make your successful business with sApp",
                  "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
                  "btnText": "Read More"
              },
              {
                  "id": 4,
                  "image": "/img/blog-4.jpg",
                  "author": "Anna Sword",
                  "date": "Aug 05, 2019",
                  "title": "How to get more clients?",
                  "content": "Need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
                  "btnText": "Read More"
              },
              {
                  "id": 5,
                  "image": "/img/blog-5.jpg",
                  "author": "Anna Sword",
                  "date": "Feb 05, 2019",
                  "title": "Grow up your business successfully",
                  "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.",
                  "btnText": "Read More"
              },
              {
                  "id": 6,
                  "image": "/img/blog-6.jpg",
                  "author": "Junaid Hasan",
                  "date": "Jan 12, 2020",
                  "title": "Meet the business magnet of the year",
                  "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
                  "btnText": "Read More"
              },
              {
                  "id": 7,
                  "image": "/img/blog-7.jpg",
                  "author": "Anna Sword",
                  "date": "Feb 05, 2019",
                  "title": "How to grow up your business",
                  "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
                  "btnText": "Read More"
              },
              {
                  "id": 8,
                  "image": "/img/blog-8.jpg",
                  "author": "Anna Sword",
                  "date": "Sep 24, 2019",
                  "title": "Planing to manage your clients?",
                  "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.",
                  "btnText": "Read More"
              },
              {
                  "id": 9,
                  "image": "/img/blog-9.jpg",
                  "author": "Anna Sword",
                  "date": "Feb 05, 2020",
                  "title": "Make your successful business with sApp",
                  "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
                  "btnText": "Read More"
              }
          ]
      },
      "SidebarDataContent": {
          "widgetTitle_1": "Categories",
          "widgetTitle_2": "Popular Post",
          "widgetTitle_3": "Popular Tags",
          "widgetData_1": [
              {
                  "id": 1,
                  "text": "Web Design",
                  "content": "(14)"
              },
              {
                  "id": 2,
                  "text": "App Landing",
                  "content": "(32)"
              },
              {
                  "id": 3,
                  "text": "Wordpress",
                  "content": "(27)"
              },
              {
                  "id": 4,
                  "text": "UI Design",
                  "content": "(18)"
              },
              {
                  "id": 5,
                  "text": "Bootstrap",
                  "content": "(15)"
              },
              {
                  "id": 6,
                  "text": "Web Template",
                  "content": "(29)"
              }
          ],
          "widgetData_2": [
              {
                  "id": 1,
                  "image": "/img/avatar-1.png",
                  "date": "05 Feb, 2018",
                  "title": "Promote Your Apps With sApp"
              },
              {
                  "id": 2,
                  "image": "/img/avatar-2.png",
                  "date": "12 Feb, 2020",
                  "title": "Sell Your Product Like Never Before"
              },
              {
                  "id": 3,
                  "image": "/img/avatar-3.png",
                  "date": "13 Jul, 2019",
                  "title": "Built For Passionate People"
              },
              {
                  "id": 4,
                  "image": "/img/avatar-4.png",
                  "date": "03 Oct, 2019",
                  "title": "Get Unlimited Offers & Plans"
              }
          ],
          "widgetData_3": [
              {
                  "id": 1,
                  "text": "sApp"
              },
              {
                  "id": 2,
                  "text": "Bootstrap"
              },
              {
                  "id": 3,
                  "text": "IOS"
              },
              {
                  "id": 4,
                  "text": "Android"
              },
              {
                  "id": 5,
                  "text": "Landing Page"
              },
              {
                  "id": 6,
                  "text": "Business"
              },
              {
                  "id": 7,
                  "text": "Fashion"
              },
              {
                  "id": 8,
                  "text": "Media"
              },
              {
                  "id": 9,
                  "text": "Lifestyle"
              },
              {
                  "id": 10,
                  "text": "Wordpress"
              },
              {
                  "id": 11,
                  "text": "Web Design"
              },
              {
                  "id": 12,
                  "text": "Mobile App"
              }
          ]
      },
      "PhotoDetailsContent": {
          "title": "How to grow up your business with sApp",
          "image": "/img/blog-2.jpg",
          "author": "Anna Swford",
          "date": "05 Feb, 2020",
          "comments": "2 Comments",
          "text_1": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
          "text_2": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
          "text_3": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
          "text_4": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
          "quoteText_1": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
          "quoteText_2": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
          "adminImage": "/img/avatar-1.png",
          "admin": "Anna Swford",
          "adminText": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock Virginia.",
          "commentsTitle": "Recent Comments",
          "commentsPost": "Post your Comments",
          "postText": "Send basic",
          "iconList": [
              {
                  "id": 1,
                  "link": "bg-white facebook",
                  "iconClass": "fab fa-facebook-f"
              },
              {
                  "id": 2,
                  "link": "bg-white twitter",
                  "iconClass": "fab fa-twitter"
              },
              {
                  "id": 3,
                  "link": "bg-white google-plus",
                  "iconClass": "fab fa-google-plus-g"
              }
          ],
          "commentsData": [
              {
                  "id": 1,
                  "commentsImage": "/img/avatar-2.png",
                  "commentsAuthor": "Junaid Hasan",
                  "replyText": "Reply",
                  "commentsText_1": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
                  "commentsText_2": "The standard chunk of Lorem Ipsum used since the 1500s."
              },
              {
                  "id": 2,
                  "commentsImage": "/img/avatar-3.png",
                  "commentsAuthor": "Jassica William",
                  "replyText": "Reply",
                  "commentsText_1": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
                  "commentsText_2": "All the Lorem Ipsum generators on the Internet tend to repeat."
              }
          ]
      }, 

  
      "TermsSectionContent": {
        "heading": "Terminos de uso y condiciones",
        "headingTwo": "Nuestro compromiso es tu privacidad y seguridad",
        //A continuación te presentamos nuestros términos de uso y condiciones. Tómate un tiempo  para leer este acuerdo. Nuestro código de ética y compromiso nos obliga a ofrecerte un servicio transparente, que respete tu privacidad y te ofrezca una terapia con psicólogos con preparados con mestría y certificados por Amaru.
        "headingText": "",
        "headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
        "faqText": "Haven't find suitable <answ></answ>er?",
        "faqTextLink": "Tell us what you need.",
        'image':"/img/logo-white.png",
        "faqData": [
            {
                "id": 1,
                "title": "",
                "content": "El presente instrumento contiene los términos y condiciones (los “Términos y Condiciones”) aplicables al uso de los servicios y productos (los “Servicios”) ofrecidos por AMARU PSICOLOGÍA, S.A.P.I. DE C.V. (“Amaru”) a través del sitio de internet amaru.mx (el “Sitio”). Cualquier persona que desee acceder y/o usar el Sitio o los Servicios (“Usuario(s)” y/o “Cliente(s)”) podrá hacerlo sujetándose a los presentes Términos y Condiciones, junto con todas las demás políticas y principios que rigen Amaru y que son incorporados en los presentes Términos y Condiciones y se entienden que forman parte de los mismos. En este sentido, se entenderá que el ingreso y/o el registro en el Sitio por parte del Cliente, tiene como consecuencia la aceptación y adhesión a los presentes Términos y Condiciones, creándose en consecuencia una relación jurídica entre Amaru y el Cliente, en virtud de adquirir tal calidad. El Cliente y/o Usuario acepta y reconoce que todos los Servicios ofrecidos por Amaru se realizan a través del Sitio, por lo que el Cliente y/o Usuario a través de la aceptación de los presentes Términos y Condiciones, manifiesta su consentimiento para identificarse y efectuar la contratación, consulta, aclaración y/o cualquier otro acto relacionado con los Servicios de Amaru, a través de medios tecnológicos, electrónicos, digitales, ópticos y/o cualquier otra tecnología que las partes acuerden. Cualquier persona que no acepte los Términos y Condiciones, los cuales tienen carácter obligatorio y vinculante, deberá abstenerse de utilizar el Sitio y/o los Servicios. El Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones y en el Aviso de Privacidad, así como en los demás documentos incorporados a los mismos por referencia, previo a su inscripción como Usuario de Amaru. En caso de que no esté de acuerdo con los Términos y Condiciones, no será considerado como Cliente y/o Usuario y deberá abstenerse de utilizar el Sitio y/o los Servicios. Es necesario leer cuidadosamente los siguientes Términos y Condiciones, ya que, por el simple hecho de acceder o utilizar el Sitio, se entenderá que el Cliente y/o Usuario ha leído, acepta y está de acuerdo en obligarse de conformidad con los presentes Términos y Condiciones, según los mismos sean modificados por Amaru de tiempo en tiempo."
            },
            {
                "id": 2,
                "title": "1. Aceptación del Contrato de Términos y Condiciones.",
                "content": "Al hacer uso de los Servicios ofrecidos dentro del Sitio, el Usuario reconoce y declara haber leído, comprendido y aceptado íntegramente el contenido de los Términos y Condiciones en todas sus partes, aceptando ser regido por todas sus disposiciones, y estando sujeto a las leyes y regulaciones aplicables. Al hacer uso de los Servicios, este instrumento será vinculante y obligará a las partes. Si el Usuario no acepta los Términos y Condiciones, no podrá acceder, navegar y usar el Sitio. Asimismo, no podrá hacer uso de sus servicios ni de la información disponible en las páginas web que conforman los Servicios."
            },
            {
                "id": 3,
                "title": "2. Capacidad Jurídica.",
                "content": "Los Servicios solo están disponibles para personas que tengan capacidad jurídica para contratar (capacidad de ejercicio) conforme a las leyes aplicables y que cumplan con los requisitos establecidos en los Términos y Condiciones. En consecuencia, no podrán utilizar los Servicios las personas incapaces ni los Usuarios de Amaru que hayan sido suspendidos temporalmente o inhabilitados definitivamente. En caso que el Usuario sea una persona moral, su representante legal, quien suscribe y acepta los Términos y Condiciones, declara tener poderes suficientes para actuar y contratar en representación del Cliente y/o Usuario y de obligar al mismo a las disposiciones contenidas en los Términos y Condiciones."
            },
            {
                "id": 4,
                "title": "3. Datos personales.",
                "content": "Es obligatorio completar el formulario de inscripción en todos sus campos con datos personales válidos, para poder utilizar los Servicios que brinda Amaru. El Usuario deberá completarlo con la información personal de manera exacta, precisa y veraz (los “Datos Personales”) asumiendo en todo caso la obligación de actualizar los Datos Personales conforme resulte necesario. Amaru podrá utilizar diversos medios para identificar a sus Usuarios. Amaru no se responsabiliza por la veracidad y certeza de los Datos Personales provistos por sus Usuarios. Los Usuarios garantizan y responden, en cualquier caso, de la legalidad, veracidad, exactitud, vigencia y autenticidad de los Datos Personales ingresados. Amaru se reserva el derecho de solicitar algún comprobante y/o dato adicional a efecto de corroborar los Datos Personales, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. El Usuario accederá a su cuenta de usuario mediante el ingreso de su correo electrónico y contraseña elegida. El Usuario se obliga a mantener siempre la confidencialidad de sus datos de ingreso. El Usuario acepta y entiende que su cuenta de usuario es personal, única e intransferible, y está prohibido que un mismo Usuario inscriba o posea más de una cuenta. En caso de que Amaru detecte distintas cuentas de usuario que contengan datos coincidentes o relacionados, podrá, de manera discrecional, cancelar, suspender o inhabilitar las mismas. El Usuario será responsable por todas las operaciones efectuadas en su cuenta de usuario, pues el acceso a la misma está restringido por el ingreso y uso de su contraseña, misma que debe ser del conocimiento exclusivo del Usuario. El Usuario se obliga a notificar a Amaru en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su cuenta, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión o transferencia de la cuenta de usuario bajo cualquier título. Amaru se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar una inscripción previamente aceptada, sin que esté obligada a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento."
            },
            {
                "id": 5,
                "title": "4. Privacidad de la información.",
                "content": "Para utilizar los Servicios ofrecidos por Amaru, el Cliente y/o Usuario deberá facilitar determinados datos de carácter personal y sensible. Su información personal se trata, procesa y almacena en servidores o medios magnéticos que mantienen estándares de seguridad y protección adecuados tanto física como tecnológicamente. Para más información sobre la privacidad de los Datos Personales se debe revisar el Aviso de Privacidad en el Sitio."
            },
            {
                "id": 6,
                "title": "5. Modificaciones.",
                "content": "Amaru podrá modificar, corregir, agregar, eliminar y actualizar los Términos y Condiciones en cualquier momento y de tiempo en tiempo, publicando en el Sitio los términos modificados. Todos los términos modificados entrarán en vigor al momento inmediato de su publicación. Dentro de los 5 (cinco) días naturales siguientes a la publicación de las modificaciones introducidas, el Usuario deberá comunicar por correo electrónico si no acepta las mismas. En este caso, quedará disuelto el vínculo contractual entre las partes y el Usuario que no acepte los términos modificados será inhabilitado del Sitio siempre que no tenga créditos pendientes por pagar a Amaru. Vencido este plazo, se considerará que el Usuario acepta los nuevos términos y el acuerdo continuará vigente para ambas partes. Este documento estará vigente mientras Amaru mantenga en operación el Sitio. Amaru se reserva el derecho de terminar de ofrecer el Sitio y los Servicios que se proveen a través del mismo en cualquier momento, previa notificación a los Clientes y/o Usuarios."
            },
            {
                "id": 7,
                "title": "6. Violaciones del sistema o bases de datos.",
                "content": "No está permitida ninguna acción o uso de dispositivo, software, u otro medio tendiente a interferir tanto en las actividades y operación de Amaru, como en su base de datos. Cualquier intromisión, tentativa o actividad violatoria o contraria a las leyes sobre derecho de propiedad intelectual y/o a las prohibiciones estipuladas en estos Términos y Condiciones por parte del Cliente y/o Usuario lo hará responsable de las acciones legales pertinentes, y a las sanciones previstas por este acuerdo, obligándose a pagar una indemnización por los daños y perjuicios ocasionados. En este sentido, el Cliente no podrá: (i) retirar cualquier nota de derechos de autor, marca registrada u otra nota de propiedad de cualquier parte de los Servicios; (ii) reproducir, modificar, preparar obras derivadas sobre los Servicios, distribuir, licenciar, arrendar, revender, transferir, exhibir públicamente, presentar públicamente, transmitir, retransmitir o explotar de otra forma los Servicios; (iii) descompilar, realizar ingeniería inversa o desmontar los Servicios, excepto como se permita por la ley aplicable; (iv) enlazar, reflejar o enmarcar cualquier parte de los Servicios; (v) causar o lanzar cualquier programa o script con el objeto de extraer, indexar, analizar o de otro modo realizar prospección de datos de cualquier parte de los Servicios o sobrecargar o bloquear indebidamente la operación y/o funcionalidad de cualquier aspecto de los Servicios; o (vi) intentar obtener un acceso no autorizado o dañar cualquier aspecto de los Servicios o sus sistemas o redes relacionados."
            },
            {
                "id": 8,
                "title": "7. Sanciones. Suspensión de operaciones.",
                "content": "Sin perjuicio de otras medidas, Amaru podrá advertir, suspender en forma temporal o inhabilitar definitivamente la cuenta de un Cliente y/o Usuario o una publicación, aplicar una sanción que impacte negativamente en la reputación de un Usuario, iniciar las acciones que estime pertinentes y/o suspender la prestación de sus Servicios si: (i) se quebrantara alguna ley, o cualquiera de las estipulaciones establecidas en los Términos y Condiciones y demás políticas de Amaru; (ii) si el Cliente y/o Usuario incumpliera con cualquiera de sus obligaciones como Cliente y/o Usuario; (iii) si a criterio de Amaru el Usuario incurriera en conductas o actos dolosos o fraudulentos; (iv) si no pudiera verificarse la identidad del Cliente y/o Usuario o cualquier información entregada por éste, o que dicha información fuere errónea; (v) Amaru entendiera que las publicaciones u otras acciones pueden ser causa de responsabilidad civil o penal para el Cliente y/o Usuario que las publicó."
            },
            {
                "id": 9,
                "title": "8. Responsabilidad.",
                "content": "El Cliente y/o Usuario reconoce y acepta que la utilización del Sitio es de responsabilidad exclusiva de este, por lo que libera de toda responsabilidad a Amaru y a sus directores, gerentes, empleados, agentes, operarios, representantes y/o funcionarios respecto de cualquier queja, multa, denuncia, demanda y/o acción por parte de cualquier autoridad o tercero, derivado del uso negligente o inadecuado del Sitio. Asimismo, en caso de que Amaru o cualquiera de sus directores, gerentes, empleados, agentes, operarios, representantes y/o funcionarios se viere obligado a pagar una multa, indemnización o cualquier suma de dinero como consecuencia del uso negligente o inadecuado del Sitio por parte del Usuario, este se obliga a restituir toda suma pagada y a indemnizar todo perjuicio sufrido."
            },
            {
                "id": 10,
                "title": "9. Fallas en el sistema.",
                "content": "Amaru no se responsabiliza por cualquier daño, perjuicio o pérdida al Cliente y/o Usuario causados por fallas en el sistema y/o Sitio, en el servidor o en Internet. Amaru tampoco será responsable por cualquier virus o software maligno que pudiera infectar el equipo del Cliente y/o Usuario como consecuencia del acceso, uso o examen del Sitio o a raíz de cualquier transferencia de datos, archivos, imágenes, textos, o audio, contenidos en el mismo, así como cualquier otra información enviada con el uso de medios electrónicos. Los Clientes y/o Usuarios no podrán imputar responsabilidad alguna ni exigir indemnización por concepto alguno, en virtud de perjuicios resultantes de dificultades técnicas o fallas en los sistemas, el Sitio o en Internet. Amaru no garantiza el acceso y uso continuado o ininterrumpido del Sitio. El sistema puede eventualmente no estar disponible debido a dificultades técnicas o fallas de Internet, o por cualquier otra circunstancia ajena a Amaru, en cuyo caso se procurará restablecerlo con la mayor prontitud posible, sin que por ello pueda imputársele algún tipo de responsabilidad. Amaru no será responsable por ningún error u omisión contenido en el Sitio."
            },
            {
                "id": 11,
                "title": "10. Verificación de identidad.",
                "content": "Debido a que la verificación de la identidad de los Clientes y/o Usuarios a través del Sitio puede resultar compleja, Amaru y los Clientes y/o Usuarios cuentan con un sistema de información que es actualizado periódicamente de acuerdo con los datos vinculados a la actividad de los Clientes y/o Usuarios en el Sitio y a la información proporcionada por los Clientes y/o Usuarios según las operaciones que hayan realizado. Este sistema de información además contará con un espacio en que los Usuarios podrán hacer comentarios y réplicas a las calificaciones recibidas y acceder a los mismos. Dichos comentarios serán incluidos bajo exclusiva responsabilidad de los Usuarios que los emitan. En virtud de que la información relativa a la identidad, comentarios y réplicas son realizados por los Clientes y/o Usuarios y en consecuencia son datos personales, estos serán incluidos bajo exclusiva responsabilidad de los Usuarios que los emitan."
            },
            {
                "id": 12,
                "title": "11. Propiedad intelectual.",
                "content": "Los contenidos del Sitio, así como también los programas, bases de datos, redes o archivos que permiten al Usuario acceder y usar su cuenta, diseños, logotipos, marcas registradas, códigos fuente, software, entre otros, son de la titularidad y propiedad exclusiva de Amaru y se encuentran protegidos por las normas de propiedad intelectual y derechos de autor y por los tratados internacionales aplicables y vigentes en estas materias. El uso indebido y la reproducción total o parcial de dichos contenidos quedan prohibidos, salvo previa autorización expresa y por escrito por parte de Amaru."
            },
            {
                "id": 13,
                "title": "12. Indemnización.",
                "content": "El Cliente y/o Usuario mantendrá indemne a Amaru, sus filiales, subsidiarias, empresas controladas y/o controladoras, directivos, administradores, representantes, funcionarios y empleados, por cualquier reclamo, demanda, denuncia o acción por parte de terceros por las actividades que estos realicen en el Sitio o por el incumplimiento a los Términos y Condiciones y demás políticas que se entienden incorporadas al presente instrumento o por la violación de cualesquiera leyes o derechos de terceros. Esta obligación de indemnización considera los honorarios de abogados en que incurra Amaru por este concepto."
            },
            {
                "id": 14,
                "title": "13. Jurisdicción y ley aplicable.",
                "content": "Los presentes Términos y Condiciones se encuentran sujetos y regidos por las leyes vigentes en los Estados Unidos Mexicanos. Para cualquier controversia derivada o relacionada con los presentes Términos y Condiciones, así como para la interpretación de los mismos, los Clientes y/o Usuarios se someten expresa e irrevocablemente a la jurisdicción de los tribunales competentes de la Ciudad de México, México. Asimismo, los Clientes y/o Usuarios renuncian expresa e irrevocablemente por este acto a cualquier otra jurisdicción a la que pudieren tener derecho por motivo de sus domicilios presentes o futuros o por cualquier otra razón."
            },
            {
                "id": 15,
                "title": "14. Contacto.",
                "content": "Las comunicaciones que el Cliente y/o Usuario deba o quiera dirigir a Amaru, se efectuarán por correo electrónico dirigido a asesoria@amaru.mx. Las comunicaciones que Amaru deba o quiera dirigir al Cliente y/o Usuario se efectuarán por correo electrónico dirigido a la dirección electrónica designada por este a través del Sitio."
            },
            {
                "id": 16,
                "title": "15. Disposiciones generales.",
                "content": "Notificaciones: Amaru podrá notificar al Cliente por medio de una notificación mediante un correo electrónico enviado al correo electrónico del Cliente registrado en la página web o al que hubiere señalado al momento de suscribir los documentos correspondientes. El Cliente podrá notificar a Amaru mediante el envío de un correo electrónico dirigido a asesoria@amaru.mx Prohibición de cesión: El Cliente no podrá ceder ni transferir los Términos y Condiciones, en todo o en parte, sin el consentimiento previo y por escrito de Amaru. Amaru podrá ceder o transferir los Términos y Condiciones, en todo o en parte, incluido, de modo ejemplificativo mas no limitativo, a: (i) una subsidiaria o una afiliada; (ii) un adquirente del capital, del negocio o de los activos de Amaru; o (iii) en caso de fusión a la entidad fusionante. Acuerdo íntegro: Si cualquier disposición de los Términos y Condiciones es declarada ilegal, inexistente, nula, inválida o inexigible, ya sea en su totalidad o en parte, dicha disposición o parte de esta se considerará que no forma parte de este instrumento, mientras que la legalidad, validez y exigibilidad del resto de las disposiciones de los Términos y Condiciones no se verá afectada y mantendrán su plena vigencia y validez. Incorporación total: Los Términos y Condiciones y todas sus disposiciones se entienden incorporadas en todos los instrumentos celebrados con Amaru."
            },
            {
                "id": 17,
                "title": "16. Declaración.",
                "content": "En este acto y por el presente, el Usuario reconoce haber leído por vía electrónica y comprendido el contenido íntegro de los Términos y Condiciones, y que al presionar el botón 'Registrarme' en el Sitio, acepta expresa, inequívoca e irrevocablemente los Términos y Condiciones. El documento electrónico en que se formalizan los presentes Términos y Condiciones será archivado en la base de datos de Amaru y será accesible al Cliente y/o Usuario en su Perfil de Usuario. En caso de que el Usuario necesite identificar y corregir errores en el envío o en sus datos, podrá contactar a Amaru mediante el correo electrónico asesoria@amaru.mx. Se deja constancia que, verificada la aceptación del presente Contrato en los términos antes referidos, Amaru enviará una confirmación del perfeccionamiento de estos Términos y Condiciones al Usuario por correo electrónico, conteniendo una copia íntegra, clara y legible de dichos Términos y Condiciones. Estos Términos y Condiciones han sido aceptados electrónicamente por el Cliente y/o Usuario, en la fecha en que realizó su registro en la plataforma de Amaru."
            },
            {
                "id": 18,
                "title": "AMARU PSICOLOGÍA, S.A.P.I. DE C.V. ",
                "content": "Ciudad de México, México. Última actualización: septiembre de 2021"
            },
        ],
    },

    "PrivacySectionContent": {
      "heading": "Aviso de Privacidad",
      "headingTwo": "Nuestro compromiso es tu privacidad y seguridad",
      //A continuación te presentamos nuestros términos de uso y condiciones. Tómate un tiempo  para leer este acuerdo. Nuestro código de ética y compromiso nos obliga a ofrecerte un servicio transparente, que respete tu privacidad y te ofrezca una terapia con psicólogos con preparados con mestría y certificados por Amaru.
      "headingText": "",
      "headingTexttwo": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.",
      "faqText": "Haven't find suitable <answ></answ>er?",
      "faqTextLink": "Tell us what you need.",
      'image':"/img/logo-white.png",
      "faqData": [
        {
            "id": 1,
            "title": "Aviso de privacidad",
            "content": "Los consejos, artículos, blogs, videos y toda otra información o contenido que surge del Sitio Web (en adelante, el Contenido) no deben considerarse servicios o tratamientos médicos bajo ninguna perspectiva. Los Contenidos se ofrecen para ayudar a mejorar el bienestar del Usuario si no está en situación de urgencia. Bajo ningún concepto debe entenderse que el Contenido constituye un reemplazo del tratamiento psicológico profesional, y ante cualquier circunstancia el Usuario deberá siempre consultar a un profesional de la salud. Ningún Contenido representa o garantiza que ningún medicamento o tratamiento en particular sea seguro, apropiado o efectivo para usted."
        },
        {
            "id": 2,
            "title": "1. Responsbale del tratamiento de datos",
            "content": "AMARU PSICOLOGÍA, S.A.P.I. DE C.V. (“Amaru”), con fundamento en la Ley Federal de Protección de Datos Personales en Posesión de Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad (D.O.F 17-I-13 y sus reformas), pone a su disposición el presente Aviso de Privacidad (el “Aviso de Privacidad”). Para efectos del presente Aviso de Privacidad, Amaru señala como su domicilio el ubicado en Los Cedros, Coyoacán, Ciudad de México, México. Sus datos personales son muy importantes para nosotras y serán tratados con base en los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad en términos de la legislación aplicable y se utilizarán solamente con las finalidades listadas a continuación."
        },
        {
            "id": 3,
            "title": "2.  Datos personales sujetos a tratamiento por Amaru.",
            "content": "Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, recabaremos para su tratamiento los siguientes datos personales, de los cuales usted es titular: (i) nombre completo; (ii) correo electrónico; (iii) número de teléfono/celular; (iv) domicilio; (v) fecha y lugar de nacimiento; (vi) nacionalidad; (vii) Registro Federal de Contribuyentes (“RFC”); (viii) estado civil; (ix) datos de identificación, contacto y laborales; (x) datos académicos o profesionales; (xi) datos migratorios y legales; y (xii) datos de facturación. (los “Datos Personales”). Los Datos Personales podrán ser recabados personalmente o a través de nuestro sitio amaru.mx (el “Sitio”) o por cualquier otro medio electrónico, telefónico, video, u otra tecnología (los “Medios Electrónicos”) y, en su caso, a través de agentes, promotores, comisionistas, proveedores o socios comerciales. Amaru podrá realizar los análisis, reportes, videollamadas y/o fotografías, realizar entrevistas presenciales o por medios remotos, (medios electrónicos o cualquier otra tecnología), así como las acciones necesarias para comprobar por sí o a través de terceros contratados particularmente para ello, la veracidad de los datos que fueron proporcionados por usted. Los Datos Personales serán solicitados por Amaru cuando usted: (i) visite nuestros Medios Electrónicos; (ii) se suscriba a la lista de correo de Amaru; (iii) cuando realice alguna solicitud para realizar una operación contemplada dentro de nuestros Servicios. Cuando visite el Sitio desde una computadora pública o compartida, alguna parte o la totalidad de su información personal, como su nombre de usuario, puede aún ser visible para otras personas que utilicen esa computadora después de usted. Es su responsabilidad asegurar que su información privada sea removida de cualquier computadora pública o compartida que \n\n\nutilice."
        },
        {
            "id": 4,
            "title": "3. Datos Personales Sensibles.",
            "content": "Para poder prestar los Servicios, Amaru podrá solicitar, recabar, tratar y utilizar datos personales sensibles, mismos que requieren de protección adicional: (i) datos de estado de salud, tanto física como psicológica; (ii) datos religiosos e ideológicos; (iii) datos sobre su orientación sexual, género, actividad sexual y prácticas sexuales. Para efectos del presente Aviso de Privacidad, estos datos personales sensibles también integran la definición de Datos Personales establecida en el punto 2 anterior."
        },
        {
            "id": 5,
            "title": "4. Finalidades necesarias.",
            "content": "Los Datos Personales que recabamos serán utilizados para atender las siguientes finalidades: (i) el cumplimiento de la relación contractual derivado de la solicitud y/o contratación de nuestros Servicios; (ii) la consulta, sesiones, diagnóstico y tratamientos psicológicos; (iii) verificar, confirmar y validar la información que proporciona como propia; (iv) administrar, operar y dar seguimiento a los Servicios y productos que solicita o contrata con Amaru; (v) formalizar la relación jurídica entre Amaru y el titular de los Datos Personales; (vi) para procesos de cobranza que pudieran derivar de la relación jurídica; (vii) incluirlo en nuestra base de datos, integrar expedientes, de manera directa o a través de un tercero; (viii) procesar las solicitudes que realice por medio de nuestros Medios Electrónicos; (ix) crear su perfil como usuario en el Sitio; (x) para evaluar si el personal que preste los Servicios a través de Amaru cuenta con las capacidades, conocimientos, entrenamiento, formación y títulos profesionales necesarios para poder prestar dichos Servicios; (xi) para reportar la comisión de delitos, ilícitos o irregularidades en relación con los servicios brindados por los prestadores de los Servicios; (xii) para permitirle el acceso a cualquiera de los inmuebles en los que se encuentren ubicadas nuestras oficinas o sucursales; (xiii) para realizar las investigaciones y acciones que consideren necesarias, a efecto de comprobar a través de terceros contratados para ello, dependencia u autoridad, la veracidad de los datos que fueron proporcionados; (xiv) todas aquellas que permitan dar cumplimiento a las obligaciones contractuales que sean adquiridas."
        },
        {
            "id": 6,
            "title": "5. Finalidades no necesarias.",
            "content": "Envío de ofertas, promociones, artículos, mercadotecnia o eventos especiales que puedan ser de interés del usuario. Ofrecer una ampliación o mejora de los Servicios contratados. Informar sobre actualizaciones de los Servicios. Llevar a cabo inteligencia comercial, realizar investigaciones de mercado, darle visibilidad a su actividad en nuestros Medios Electrónicos, seguimiento de calidad de nuestros Medios Electrónicos, evaluación y mejora de nuestros Medios Electrónicos y enviar nuestro boletín de noticias y ofertas. Enviar y recibir comunicaciones a través de nuestros Medios Electrónicos relacionado con nuestros Servicios. El titular de los Datos Personales podrá́ negarse al tratamiento de sus datos para las finalidades no necesarias, enviando un correo electrónico a la dirección asesoria@amaru.mx; en el entendido de que, en caso de no recibir la solicitud correspondiente, se entenderá́ por consentido el uso de su información para todas las finalidades antes mencionadas."
        },
        {
            "id": 7,
            "title": "6. Transferencia de Datos Personales.",
            "content": "Los Datos Personales recolectados son de carácter totalmente confidencial y Amaru tomará las medidas de seguridad suficientes para impedir que sean utilizados sin autorización. Amaru podrá compartir sus Datos Personales con: (i) sus sociedades controladoras, subsidiarias o afiliadas bajo el control común de Amaru, así como a su sociedad matriz o a cualquier sociedad de su grupo corporativo que opere bajo los mismos procesos y políticas internas; (ii) con autoridades competentes, en caso de ser solicitados, en términos de la legislación aplicable; (iii) a sociedades o compañías encargadas de investigaciones de fraude y recolección de pagos; (iv) con otras empresas en caso de ser adquiridos, fusionados o cualquier otra operación similar por esa compañía; (v) con los profesionales que presten sus Servicios a través del Sitio, riegiendose bajo un principio de estricta confidencialidad; (v) cuando sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre Amaru y el titular; y (vi) sea con base en los demás supuestos establecidos en el Artículo 37 de la Ley Federal de Datos Personales en Posesión de los Particulares. Los terceros y las entidades receptores de datos personales asumen las mismas obligaciones y/o responsabilidades de Amaru, de conformidad con lo descrito en el presente Aviso de Privacidad."
        },
        {
            "id": 8,
            "title": "7. Ejercicio de derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) y revocación del consentimiento.",
            "content": "El titular de los Datos Personales tiene derecho a (i) acceder a sus datos personales en posesión de Amaru y conocer los detalles del tratamiento de los mismos; (ii) rectificarlos en caso de estar desactualizados, ser inexactos o estar incompletos; (iii) cancelarlos cuando considere que no están siendo utilizados conforme a los principios, deberes y obligaciones aplicables; y (iv) oponerse al tratamiento de los mismos para fines específicos. El ejercicio de los Derechos ARCO debe hacerse por escrito, la solicitud deberá ser presentada en nuestro domicilio dirigida al encargado de protección de datos personales identificado en este Aviso de Privacidad, acompañada de la siguiente información y documentación: (i) datos de identificación y copia de la identificación del titular de los datos personales y, en su caso, de su representante legal. En el caso de que la solicitud se presente a través de representante legal se deberá acompañar copia del documento con el que se acredite ese carácter; (ii) la descripción de manera clara y precisa de los datos personales respecto de los cuales busca ejercer los Derechos ARCO, así como el derecho o derechos que desea ejercer. La solicitud deberá ser firmada al final del escrito y rubricada al calce de cada una de las hojas; y (iii) domicilio para oír y recibir la contestación de Amaru, y, en su caso, futuras comunicaciones y/o notificaciones, o bien su deseo de que nuestra contestación y/o futuras notificaciones o contestaciones sean enviadas a través de correo electrónico, indicando la respectiva cuenta. Usted podrá obtener el formato para ejercer sus Derechos ARCO dando clic aquí. Por cuestiones de seguridad, no se atenderán solicitudes de ejercicio de Derechos ARCO que sean enviadas por correo electrónico, ya que a través de dicho medio es imposible acreditar la personalidad del titular y/o su representante. La respuesta a las solicitudes que cumplan con los requisitos antes mencionados podrá ser notificada al titular o su representante legal vía correo electrónico en un plazo no mayor a 20 (veinte) días hábiles contados a partir de su recepción. Así también, le informamos que usted tiene derecho a iniciar un Procedimiento de Protección de Derechos ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) (http://www.inai.org.mx) dentro de los 15 (quince) días hábiles siguientes a la fecha en que reciba la respuesta, o en caso de no recibir respuesta, a partir de que concluya el plazo de 20 (veinte) días hábiles contados a partir de la fecha de recepción de su solicitud de ejercicio de Derechos ARCO."
        },
        {
            "id": 9,
            "title": "8. Medios para Limitar el Uso o Divulgación de sus Datos Personales.",
            "content": "El titular de los Datos Personales, podrá limitar el uso o divulgación de estos conforme al procedimiento previsto en la sección “Ejercicio de derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) y revocación del consentimiento”."
        },
        {
            "id": 10,
            "title": "9. Uso de Cookies, Web Beacons y Otras Tecnologías Similares..",
            "content": "Se pone en su conocimiento que Amaru utiliza mecanismos remotos o locales de comunicación electrónica, óptica u otra tecnología que nos permiten recabar Datos Personales relacionados con su actividad en los Medios Electrónicos y los Servicios. Una cookie es un fragmento de información que nuestro servidor web puede enviar a su computadora cuando usted visita nuestros Medios Electrónicos. Una cookie nos ayuda a reconocer su usuario cuando vuelva a visitar los Medios Electrónicos. Usted puede borrar, bloquear o recibir una advertencia sobre las cookies en los navegadores de Internet más comunes. Si usted quiere hacer esto, debe consultar las instrucciones de su navegador o la pantalla de ayuda para aprender más. Sin embargo, las cookies le permitirán tomar ventaja de las características más benéficas que nuestros Medios Electrónicos le ofrecen. Los Medios Electrónicos pueden incluir enlaces a sitios web de terceros ajenos a Amaru respecto de los cuales este último no asume ninguna titularidad, obligación o responsabilidad alguna."
        },
        {
            "id": 11,
            "title": "10. Consentimiento.",
            "content": "Se entenderá que al utilizar nuestros Medios Electrónicos y/o contratar los Servicios que ofrecemos para las finalidades aquí previstas, expresamente reconoce y acepta el presente Aviso de Privacidad, por lo que dicho consentimiento nos otorga la facultad para proceder al tratamiento de los Datos Personales en la forma en que se señala en el presente Aviso de Privacidad. Si tiene alguna duda acerca de nuestro Aviso de Privacidad, por favor envíe un correo electrónico a la dirección asesoria@amaru.mx "
        },
        {
            "id": 12,
            "title": "11. Modificaciones al Aviso de Privacidad..",
            "content": "El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de necesidades propias de Amaru, por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Cualquier cambio al presente Aviso de Privacidad, le será informado mediante publicación en el Sitio. En todo caso, recomendamos visitar el Sitio frecuentemente. En caso de dudas acerca del presente Aviso de Privacidad, por favor envíe un correo electrónico a la dirección asesoria@amaru.mx"
        },
        {
            "id": 13,
            "title": "12. Declaración.",
            "content": "En este acto y por el presente, el Usuario reconoce haber leído por vía electrónica, y comprendido, el contenido íntegro del presente Aviso de Privacidad, y que al hacer uso del Sitio, acepta expresa, inequívoca e irrevocablemente las estipulaciones del mismo. El documento electrónico de Aviso de Privacidad será archivado en la base de datos de Amaru, y será accesible al Usuario mediante el Sitio. En caso que el Usuario necesite identificar y corregir errores en el envío o en sus datos, podrá contactar a Amaru en asesoria@amaru.mx"
        },
        {
            "id": 14,
            "title": "AMARU PSICOLOGÍA, S.A.P.I. DE C.V.",
            "content": "Ciudad de México, México. Última actualización: septiembre de 2021"
        },
    ],
  }

};

export const AuthReducer = (initialState, action) => {
	switch (action.type) {


    case 'REQUEST_BLOGSINFO':
        return {
            ...initialState,
            loading: true,
        };

    case 'REQUEST_BLOGINFO':
            return {
                ...initialState,
                loading: true,
            };

    case 'REQUEST_PHOTOINFO':
        return {
            ...initialState,
            loading: true,
        };

    case 'REQUEST_PHOTOSINFO':
        return {
            ...initialState,
            loading: true,
        };

    case 'REQUEST_UPLOADFORM':
    return {
        ...initialState,
        loading: true,
    };

    case 'UPLOADFORM_SUCCESS':
        console.log('SIGNUP_SUCCESS: ', action);
        return {
          ...initialState,
          firstName : action.payload.firstName,
          lastName : action.payload.lastName,
          email : action.payload.email,
          adress1 : action.payload.adress1,
          adress2 : action.payload.adress2,
          postalCode : action.payload.postalCode,
          country : action.payload.country,
          city : action.payload.city,
          date : action.payload.date,
          service : action.payload.service,
          facebook : action.payload.facebook,
          twitter : action.payload.twitter,
          currency : action.payload.currency,
          amount : action.payload.amount,
          cardNumber : action.payload.cardNumber,
          expirationDate : action.payload.expirationDate
          
        };
		case 'LOGOUT':
			return {
				...initialState,
				user: '',
				token: '',
			};

    case 'REQUEST_SUBSCRIPTIONS':
      return {
        ...initialState,
        user: '',
        token: '',
      };

    case 'SUBSCRIPTIONS_REQUEST_ERROR':
      return {
        ...initialState,
        user: '',
        token: '',
      };
      
    case 'LOGIN_ERROR':
        return {
            ...initialState,
            loading: false,
            errorMessage: action.error,
        };

    case 'UPLOADFORM_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case 'USEREXIST_ERROR':
      return {
        ...initialState,
        userExist: false,
        errorMessage: action.error,
      };

    case 'BLOGSINFO_ERROR':
        return {
            ...initialState,
            userExist: false,
            errorMessage: action.error,
        };

    case 'BLOGINFO_ERROR':
        return {
            ...initialState,
            userExist: false,
            errorMessage: action.error,
        };

    case 'PHOTOINFO_ERROR':
            return {
                ...initialState,
                userExist: false,
                errorMessage: action.error,
            };

    case 'PHOTOSINFO_ERROR':
        return {
            ...initialState,
            userExist: false,
            errorMessage: action.error,
        };

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

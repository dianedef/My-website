const fesla = document.querySelector('#fesla')
const lmb = document.querySelector('#lmb')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const feslaContent = document.querySelector('#fesla-content')
const lmbContent = document.querySelector('#lmb-content')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

fesla.addEventListener('click', () => {
  const feslaBox = new WinBox({
    title: 'Association FESLA',
    url: "https://www.fesla.fr",
    width: '1000px',
    height: '800px',    
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  })
})

lmb.addEventListener('click', () => {
  const lmbBox = new WinBox({
    title: 'La Mallette Business',
    url: "https://www.lamallettebusiness.com",
    width: '1000px',
    height: '800px',    
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  })
})


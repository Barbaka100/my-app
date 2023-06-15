import '../App.css';
import Cards from '../components/Cards';
import dumbadzepic from '../assets/dumbadze.jpg';
// import dumbadzepic from '../assets/dumbadze.jpg';
import dochanashvilipic from '../assets/dochanashvili.jpg';
// import mixopic from '../assets/mixo.jpg'

const data = [
    {id:1, name:'ნოდარ დუმბაძე',  image:dumbadzepic, description:`"თქვენც სუ და ჩვენც სუ"`},
    {id:2, name:'ნოდარ დუმბაძე',  image:dumbadzepic, description: '"ჰელადოს"'},
    {id:3, name:'გურამ დოჩანაშვილი',  image:dochanashvilipic, description: '"კაცი რომელსაც ძლიერ უყვარს ლიტერატურა"'},
    {id:4, name:'გურამ დოჩანაშვილი',  image:dochanashvilipic, description: '"ერთი რამის სიყვარული დამალვა რომ ჭირდება"'}
]
const Cardlist = () => {
    function action(name) {
        alert(`ავტორი: ${name}`)
    }
  return (
    <div className='card-list'>

        {data.map((card) => <Cards 
              key={card.id} 
              name={card.name} 
              image={card.image} 
              action={action} 
              description={card.description}/>)}
        
      {/* <Cards name = 'Alex' description = 'my name is' image={alexpic} action={action}/>
      <Cards name = 'David' description = 'my name is' image={davidpic} action={action}/>
      <Cards name = 'Eka' description = 'my name is' image={ekapic} action={action}/>
      <Cards name = 'Mixo' description = 'my name is' image={mixopic} action={action}/> */}
    </div>
  )
}

export default Cardlist
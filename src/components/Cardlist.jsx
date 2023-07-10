import '../App.css';
import Cards from '../components/Cards';
import dumbadzepic from '../assets/dumbadze.jpg';


const data = [
    {id:1, name:'ნოდარ დუმბაძე',  image:dumbadzepic, description:`"თქვენც სუ და ჩვენც სუ"`},
   
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

import Card from '../Card/Card';
import styles from './Cards.module.css'; 
export default function Cards(props) {
   const { characters,onClose } = props;  

   return (
      <div className={styles.divCards}>
         
         {/* {characters.map(character => 
            <Card
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
            )} */}
            {characters.map(character => (
         <Card key={character.id} character={character} onClose={()=>onClose(character.id)} />))}
      </div>
   );
}


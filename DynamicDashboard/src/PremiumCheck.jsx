const PremiumCheck = () => {
    let isPremiumUser = true;
   return isPremiumUser ? <h2>greetings user premium</h2> : <h3>sorry premium only</h3>
}

export default PremiumCheck
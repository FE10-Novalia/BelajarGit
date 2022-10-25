const lampu = n => {
    let lampu = 'mati'
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            lampu == 'mati' ? lampu = 'menyala' : lampu = 'mati';
        }
    }

    console.log(lampu)
}

lampu(9)
process.stdout.write('Está gostando do curso? ')
process.stdin.on('data', function(data){
    process.stdout.write(`Sua resposta foi ${data.toString()}Valeu!\n`)
    process.exit()
})
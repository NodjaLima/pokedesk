$('#submit').on('click', function(evento) {
  evento.preventDefault()
  var nome = $("#pk-name").val()
  var name = nome.toLowerCase()
  var url = `https://pokeapi.co/api/v2/pokemon/${name}`

  $.ajax({
    url: url,
    type: "GET",
    dataType: 'json',

    success: function(result) {
      console.log(result)

      $('#nome_pokemon').html(`This is ${result.name}`)
      $('#img_pokemon').html(`<img src="${result.sprites.front_default}"/>`)
      $('#habilidade_pokemon').html(`The best ability is ${result.abilities[1].ability.name}`)
      $('#tipo_pokemon').html(`The default move is ${result.moves[0].move.name}`)
      
    },

    
  })
})
 
$(function () {

  // submit event
  $("#search").submit((event) => {
    event.preventDefault()
    console.log('submitting form')
    const input = $("#query").val()
    console.log(input)
    search(input)
  })
// end submit event


// search function
  function search(query) {
    const url = "https://api.giphy.com/v1/gifs/search"
    const apiKey = "HRuknNTOGG0i1qVagcgOpKaxQz2OTAop"

      // making API request using AJAX
    $.ajax({
      url: url,
      type: "GET",
      data: { api_key: apiKey, q: query }
    })
    .done((response) => {
      // execute this function if request is successful
      console.log(response.data)

      // pass array of gifs as a parameter from API tp displayResults() function
      // function is defined below outside of this event
      displayResults(response.data)
    })
    .fail(() => {
      // execute this function if request fails
      alert('error occurred')
    })
  }
// end search function

// display results function
function displayResults(gifs) {
  // gifs = [{}, {}, {}] - arrray of objects from the API
const gifRows = gifs.map((gif) => {
// generate an HTML row (<tr></tr>) for each gif in the array
    return (
      `
      <tr>
        <td>${gif.title}</td>
        <td>
        <img src="${gif.images.original.url}"/>
        </td>
        <td>${gif.rating}</td>
        <td><a href="${gif.url}" target="_blank">${gif.url}</a></td>
      </tr>
      `
    )
  })
  console.log(gifRows)

  $('tbody').html(gifRows)

}
// end displayResults

// close document function
})

var contactData = [
  (['Oleta Level', '+442032960159', '10 London Wall, London EC2M 6SA, UK']),
  (['Maida Harju', '+442032960899', 'Woodside House, 94 Tockh Rd, Darwen BB3 1LL, UK']),
  (['Lia Pigford', '+442032960182', '23 Westmorland Cl, Darwen BB3 2TQ, UK']),
  (['Ghislaine Darden', '+442032960427', '20-24 Knowlesly Rd, Darwen BB3 2NE, UK']),
  (['Jana Spitler', '+442032960370', '4 St Lucia Cl, Darwen BB3 0SJ, UK']),
  (['Dolly Detweiler', '+442032960977', '18 Johnson Rd, Darwen BB3, UK']),
  (['Stanley Vanderhoof', '+442032960000', '17 Anchor Ave, Darwen BB3 0AZ, UK']),
  (['Adan Milian', '+442032960011', '20 Ellerbeck Rd, Darwen BB3 3EX, UK']),
  (['Marivel Molina', '+442032960013', 'Tockholes Rd, Darwen BB3, UK']),
  (['Kris Everett', '+442032960012', 'Pinewood, Tockholes Rd, Darwen BB3 1JY, UK'])
]
// get & display contact details
function getDetails() {
  var seq = contactData.sort(); /* sort names from A - Z */
  for (var x = 0; x < seq.length; x++) {
      var goGet = seq[x]; /* use loop to get single contact details */
      var block = '<div class="contact"><ul><li>'+goGet[0]+'</li><li class="num">'+goGet[1]+'</li><li class="loc">'+goGet[2]+'</li></ul></div>';
  document.write(block);
  }
}

function nameFilter() {
  document.querySelector('body').classList.add('hide');
  document.querySelector('.nameFilter').setAttribute('onclick', 'reverseNameFilter()');
}
function reverseNameFilter() {
    document.querySelector('body').classList.remove('hide');
    document.querySelector('.nameFilter').setAttribute('onclick', 'nameFilter()');
}

getDetails();

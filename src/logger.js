function logger(data, highlight) {
    function stringifyEvent(e) {
      const obj = {};
      for (let k in e) {
        obj[k] = e[k];
      }
      return JSON.stringify(obj, (k, v) => {
        if (v instanceof Node) 
          return `Node(${v.tagName.toLowerCase()}${v.id?.length ? "#"+v.id :''}${v.className.length ? '.'+v.className.replace(' ', '.') :''})`;
        if (v instanceof Window) 
          return 'Window';
        return v;
      }, ' ');
    }

    const time = new Date(Date.now())
    let msg = data
    if(typeof data === 'object') {
    try {
        msg = stringifyEvent(data)
      } catch(ex) {
        msg = data
      }
    }
    $('#logger')?.prepend(`<span ${highlight ? 'style="color:red"' : ''}>[${time.toTimeString().split(' ')?.[0]}] ${msg}</span><br/>`)
    if(!$('#logger').length) alert('No #logger')
}

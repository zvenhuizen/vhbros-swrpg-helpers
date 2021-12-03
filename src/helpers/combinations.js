const combine = ([head, ...[headTail, ...tailTail]]) => {
  if (!headTail) return head
  
  // const combined = headTail.reduce((pv, cv) => {
  //   console.log(pv);
  //   console.log(cv);
  //   return pv.map((x,i) => x + cv[i]);
  // })
  const combined = headTail.reduce((acc, x) => {
    return acc.concat(head.map(h => `${h};${x}`))
  }, [])

  // const combined = headTail.map((x) => {
  //   return x.map((y,i) => {
  //     return head.map((h) => {
  //       console.log(`Y: ${y}`);
  //       console.log(`H: ${h}`);
  //       return y + h[1];
  //     });
  //   });
    // console.log(`HEADTAIL: ${x}`)
    // console.log(`HEAD: ${head}`)
    // console.log(x);
    // head.map((h) => {
    //   console.log(h);
    //   console.log(x);
    // });
  //});

  return combine([combined, ...tailTail])
}

export default combine
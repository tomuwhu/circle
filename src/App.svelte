<script>
  const A = n => Array.from({length: n})
  const T = d => A(101).map(_ => A(101).fill(d))
  const t = T(0)
  const circle = (cx, cy, r, c = 1) => {
    let x = 0
    let y = -r
    let p = -r
    while (x < - y) {
      if (p > 0) {
        y++
        p += 2 * (x + y) + 1
      } else {
        p += 2 * x + 1
      }
      t[cx + x][cy + y] += c
      t[cx + x][cy - y] += c
      t[cx + y][cy + x] += c
      t[cx - y][cy + x] += c
      if (x>0) {
        t[cx - x][cy + y] += c
        t[cx + y][cy - x] += c
        t[cx - y][cy - x] += c
        t[cx - x][cy - y] += c
      }
      x++
    }
  }

for (let i = 1; i <= 50; i++) {
  circle(50, 50, i)
}

</script>

<main>
  <table>
    {#each t as row}
      <tr>
        {#each row as cell}
          <td class="p{cell}"></td>
        {/each}
      </tr>
    {/each}
  </table>
</main>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border-radius: 3px;
    height: 6px;
    width: 6px;
    background-color: black;
  }
  :global(td.p1) {
    background-color: white;
  }
  :global(td.p2) {
    background-color: rgb(255, 200, 200);
  }
  :global(td.p3) {
    background-color: rgb(200, 255, 249);
  }
  :global(td.p4) {
    background-color: rgb(252, 255, 200);
  }
</style>

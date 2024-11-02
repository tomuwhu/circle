<script>
  const A = n => Array.from({length: n})
  const T = d => A(101).map(_ => A(101).fill(d))
  const t = T(0)
  const circle = (cx, cy, r) => {
    let x = 0
    let y = -r
    let p = -r
    while (x < -y) {
      if (p > 0) {
        y++
        p += 2 * (x + y) + 1
      } else {
        p += 2 * x + 1
      }
      t[cx + x][cy + y] = 1
      t[cx - x][cy + y] = 1
      t[cx + x][cy - y] = 1
      t[cx - x][cy - y] = 1
      t[cx + y][cy + x] = 1
      t[cx - y][cy + x] = 1
      t[cx + y][cy - x] = 1
      t[cx - y][cy - x] = 1
      x++
    }
  }
for (let i = 1; i < 5; i++)
  circle(50, 50, i*10 + 10)
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
</style>

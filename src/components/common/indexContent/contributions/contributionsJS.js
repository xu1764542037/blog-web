  function ContributionsJS(){
    const gridCell = document.querySelectorAll('.grid__cell');
    const tooltip = document.querySelector('.tooltip');

    let timer = null;

    const clearTooltip = () => {
      tooltip.innerHTML = '';
    }

    const closeTooltip = () => {
      tooltip.classList.remove('tooltip_visible');

      timer = setTimeout(() => {
        tooltip.classList.remove('tooltip_display');
        clearTooltip();
      }, 200);
    }

    const openTooltip = ({ x, y, commit, date }) => {
      clearTimeout(timer);
      clearTooltip();
      tooltip.style.top = y+'px';
      tooltip.style.left = x+'px';
      tooltip.classList.add('tooltip_display');
      setTimeout(() => {
        tooltip.classList.add('tooltip_visible');
      }, 1);

      const commitMsgNode = document.createElement("strong");
      const commitMsg = document.createTextNode(commit);
      commitMsgNode.appendChild(commitMsg);
      const dateMsg = document.createTextNode(`  ${date}`);
      tooltip.appendChild(commitMsgNode);
      tooltip.appendChild(dateMsg);
    }

    gridCell.forEach(cell => {
      cell.addEventListener('mouseover', () => {
        const coords = cell.getBoundingClientRect();
        const commit = cell.getAttribute('data-commit');
        const date = cell.getAttribute('data-data');

        openTooltip({
          x: coords.x + coords.width / 2,
          y: coords.y,
          commit,
          date
        });
      });
      cell.addEventListener('mouseout', closeTooltip);
    });

    const alphabet = {
      'D': [
        [0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
      ],
      'E': [
        [0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0]
      ],
      'H': [
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0]
      ],
      'L': [
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0]
      ],
      'O': [
        [0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0]
      ],
      'R': [
        [0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 0]
      ],
      'W': [
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0]
      ],
      ',': [
        [0, 0, 0, 0, 0, 1, 1]
      ],
      '<': [
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 0]
      ],
      '>': [
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0]
      ]
    }

    const monthArr = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const msDay = 86400000;
    const msFirstDay = 1553385600000;
    let counter = 0;

    const getDateString = (cnt) => {
      const date = new Date(msFirstDay + msDay * cnt);
      return ` ${date.getFullYear()}年${monthArr[date.getMonth()]}${date.getDate()}号`;
    }

    const getContributionsObj = (cnt, isCommits) => {
      const min = 1;
      const max = 12;
      const rand = isCommits ? Math.floor(Math.random() * (+max - +min) + +min) : 0;

      return {
        rand,
        str: isCommits ? `${rand} 次上传  - ${rand > 1 ? '' : ''}` : '0次上传 - '
      };
    }

    const drawSymbol = l => {
      const data = alphabet[l] || [];
      for (let i = 0, commit = {}, date = '' ; i < data.length ; i++) {
        for (let j = 0 ; j < 7 ; j++) {
          date = getDateString(counter);
          commit = getContributionsObj(counter, data[i][j] === 1);

          if (data[i][j] === 1) {
            gridCell[counter].classList.add(`grid__cell_color_${Math.floor((commit.rand + 2) / 3)}`);
          }

          gridCell[counter].setAttribute('data-commit', commit.str);
          gridCell[counter].setAttribute('data-data', date);

          counter++;
        }
      }
    }

    const drawSpace = () => {
      for (let i = 0, commit = {}, date = '' ; i < 7 ; i++) {
        date = getDateString(counter);
        commit = getContributionsObj(counter, false);

        gridCell[counter].setAttribute('data-commit', commit.str);
        gridCell[counter].setAttribute('data-data', date);

        counter++;
      }
    }

    const drawString = string => {
      drawSpace();
      string.split('').forEach(symbol => {
        drawSymbol(symbol.toUpperCase());
        drawSpace();
      });
    }


// init drawing

    drawString('<Hello, World>');
  }
  export {
    ContributionsJS
  }

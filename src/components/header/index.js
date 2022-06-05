import React  from 'react'
import useGithub from '../../hooks/githubHooks'
import * as S from './styled'
import { useState } from 'react'

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitGetUser();
    }
  }
  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  }
  return (
    <header>
        <S.Wrapper>
            <input type="text" onChange={(event) => setusernameForSearch(event.target.value)} onKeyDown={handleKeyDown} />
            <button onClick={submitGetUser}>Buscar</button>
        </S.Wrapper>
    </header>
  )
}

export default Header;
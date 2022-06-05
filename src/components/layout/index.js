import React from 'react';
import Header from '../header';
import * as S from './styled'

function Layout({children}) {
  return (
    <S.WrapperLayout>
        <header>
            <Header />
        </header>
        {children}
    </S.WrapperLayout>
  )
}

export default Layout
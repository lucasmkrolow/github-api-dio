import React from 'react';
import useGithub from '../../hooks/githubHooks';
import * as S from './styled';

function Profile() {

const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div><a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
          <h1>{githubState.user.name}</h1>
            </a>
          <S.WrapperUserGeneric>
            <h3>Bio:</h3>
            <span>
              {githubState.user.bio}
              </span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <a href={`${githubState.user.html_url}?tab=followers`}
              target="_blank"
              rel="noreferrer"> {githubState.user.followers}</a>
          </div>
          <div>
            <h4>Following</h4>
            <a href={`${githubState.user.html_url}?tab=following`}
              target="_blank"
              rel="noreferrer"> {githubState.user.following}</a>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
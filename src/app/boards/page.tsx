'use client';
import React, { SuspenseList } from 'react';
import Container from 'components/layout/Container';
import Title from 'components/ui/Title';
import BestArticleList from '@/components/Article/BestArticleList';
import { ArticleList } from '@/components/Article/ArticleList';

function Boards() {
  return (
    <>
      <SuspenseList>
        <Container>
          <Title titleTag='h1' text='베스트 게시글' />
        </Container>
        <BestArticleList /> 
        <ArticleList /> 
      </SuspenseList>
    </>
  );
}

export default Boards;


'use client';
import React from 'react';
import Container from 'components/layout/Container';
import Title from 'components/ui/Title';
import BestArticleList from '@/components/Article/BestArticleList';
import { ArticleList } from '@/components/Article/ArticleList';

function Boards() {
  return (
    <>
      <Container>
        <Title titleTag='h1' text='베스트 게시글' />
      </Container>
      <BestArticleList /> 
      <ArticleList /> 
    </>
  );
}

export default Boards;


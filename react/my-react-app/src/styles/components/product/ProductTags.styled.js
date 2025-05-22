import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
  margin-bottom: 8px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #f4f6fa;
  color: #4e5968;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`;

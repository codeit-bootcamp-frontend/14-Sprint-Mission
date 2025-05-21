import styled from "styled-components";
import { Link } from "react-router-dom";

// Main container
export const ProductsPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
`;

// Section containers
export const SectionContainer = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// All items header
export const AllItemsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const AllItemsTitle = styled.h2`
  margin-bottom: 0;
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  flex: 1;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-top: 12px;
  }
`;

export const Group2 = styled.div`
  flex: 7;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;

  @media (max-width: 1279px) {
    justify-content: flex-start;
  }
`;

export const AddItemButton = styled(Link)`
  width: 133px;
  height: 42px !important;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 8px;
  background-color: #3692ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: #2a7ad4;
  }

  @media (max-width: 767px) {
    order: -1;
    margin-left: 8px;
  }
`;

export const MobileAddButton = styled(AddItemButton)`
  order: initial;
  margin-left: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopAddButton = styled(AddItemButton)`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const SortDropdown = styled.select`
  white-space: nowrap;
  height: 32px;
  padding: 0 36px 0 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  background: white
    url('data:image/svg+xml;utf8,<svg fill="%23333" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')
    no-repeat right 12px center/16px 16px;
  appearance: none;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #bdbdbd;
  }

  option {
    font-size: 15px;
    background: white;
    color: #222;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

// Mobile sort elements
export const MobileSortContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MobileSortButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s;

  &:active,
  &:focus {
    background: #f0f0f0;
    outline: none;
  }

  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

export const MobileSortMenu = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 100px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  z-index: 10;
  padding: 6px 0;
  list-style: none;
`;

export const MobileSortMenuItem = styled.li`
  padding: 10px 18px;
  font-size: 15px;
  color: #222;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;

  &.selected,
  &:hover {
    background: #f5f7fa;
    font-weight: bold;
  }
`;

// Grid layouts
export const ItemsGrid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BestItemsGrid = styled(ItemsGrid)`
  grid-template-columns: 343px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 343px);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 282px);
  }
`;

export const AllItemsGrid = styled(ItemsGrid)`
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 221px);
    max-width: 1200px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 224px);
    max-width: 1200px;
  }
`;

// Item card
export const ItemCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const ItemCardContent = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    font-size: 18px;
    font-weight: 700;
    color: #222;
    margin-top: 4px;
  }

  .favorites {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: #666;
    margin-top: 4px;
  }
`;

export const FavoriteIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 2px;
  vertical-align: middle;
`;

// Pagination
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

// Error message
export const ErrorMessage = styled.div`
  background-color: #ffeaea;
  color: #e53935;
  padding: 16px;
  border-radius: 8px;
  margin: 20px auto;
  text-align: center;
  max-width: 600px;
`;

export const MessageParagraph = styled.p`
  text-align: center;
  color: #757575;
  margin: 40px 0;
  font-size: 16px;
`;

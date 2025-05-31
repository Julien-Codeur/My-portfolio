import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BlogSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.background.dark};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text.primary};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.article)`
  background-color: ${props => props.theme.colors.background.darker};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${props => props.theme.colors.primary.main},
      ${props => props.theme.colors.secondary.main}
    );
    opacity: 0.1;
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.background.light};
`;

const ReadMoreLink = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary.main};
  }
`;

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Les Tendances du Développement Web en 2024',
      excerpt: 'Découvrez les dernières tendances et technologies qui façonnent le développement web moderne.',
      date: '15 Mars 2024',
      readTime: '5 min',
      image: '/images/blog/web-dev-trends.jpg',
      link: '#'
    },
    {
      title: 'Introduction à React et TypeScript',
      excerpt: 'Un guide complet pour débuter avec React et TypeScript, des bases aux concepts avancés.',
      date: '10 Mars 2024',
      readTime: '8 min',
      image: '/images/blog/react-typescript.jpg',
      link: '#'
    },
    {
      title: 'Optimisation des Performances Web',
      excerpt: 'Les meilleures pratiques pour améliorer les performances de votre application web.',
      date: '5 Mars 2024',
      readTime: '6 min',
      image: '/images/blog/web-performance.jpg',
      link: '#'
    }
  ];

  return (
    <BlogSection id="blog">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Blog
        </SectionTitle>
        <BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogImage imageUrl={post.image} />
              <BlogContent>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <BlogMeta>
                  <span>{post.date} • {post.readTime}</span>
                  <ReadMoreLink href={post.link}>Lire la suite →</ReadMoreLink>
                </BlogMeta>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

export default Blog; 
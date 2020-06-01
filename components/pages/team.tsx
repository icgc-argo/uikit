import React from 'react';
import { css } from 'uikit';
import DefaultLayout from './DefaultLayout';
import Typography from 'uikit/Typography';
import TitleBorder from 'uikit/TitleBorder';
import { ThemeColorNames } from 'uikit/theme/types';
import { Row, Col } from 'react-grid-system';
import chunk from 'lodash/chunk';
import get from 'lodash/get';
import { useTheme } from 'uikit/ThemeProvider';
import banner from 'static/icgc-galaxy-bg.jpg';

type Member = { name: string; title?: string };
type Team = { title: string; members: Array<Member>; color: keyof ThemeColorNames };

const teamData: Array<Team> = [
  {
    title: 'Leaders',
    members: [
      { name: 'Christina Yung', title: 'Director of Genome Informatics, OICR' },
      { name: 'Lincoln Stein', title: 'Head of Adaptive Oncology, OICR' },
    ],
    color: 'accent1',
  },
  {
    title: 'Bioinformatics and Data Curation',
    members: [
      { name: 'Junjun Zhang', title: 'Lead Bioinformatician' },
      { name: 'Hardeep Nahal' },
      { name: 'Linda Xiang' },
    ],
    color: 'accent3',
  },
  {
    title: 'Software Engineering',
    members: [
      { name: 'Atul Kachru', title: 'Senior Project Manager' },
      { name: 'Dusan Andric', title: 'Software Architect, Team Lead' },
      { name: 'Kim Cullion', title: 'Senior UX/UI Designer' },
      { name: 'Rosi Bajari', title: 'Senior Technical Business Analyst' },
      { name: 'Alex Lepsa' },
      { name: 'Alexis Li' },
      { name: 'Ann Catton' },
      { name: 'Bashar Allabadi' },
      { name: 'Ciaran Schutte' },
      { name: 'Henrich Feher' },
      { name: 'Jared Baker' },
      { name: 'Jaser Uddin' },
      { name: 'Jon Eubank' },
      { name: 'Minh Ha' },
      { name: 'Robert Tisma' },
      { name: 'Wajiha Shah' },
    ],
    color: 'accent4',
  },
  {
    title: 'Research IT',
    members: [
      { name: 'David Sutton', title: 'Director IT and Information Security Officer, OICR' },
      { name: 'Bob Gibson' },
      { name: 'Gino Yearwood' },
      { name: 'Miki Wong' },
    ],
    color: 'secondary',
  },
  {
    title: 'Alumni',
    members: [
      { name: 'Aleks Pejovic' },
      { name: 'Priyonto Saha' },
      { name: 'Xu Deng' },
      { name: 'Kevin Hartmann' },
    ],
    color: 'accent3',
  },
];

const SectionTitle = props => (
  <Typography
    css={css`
      font-size: 20px;
      margin-top: 30px;
      margin-bottom: 15px;
    `}
    variant="subtitle"
    {...props}
  />
);

export default function TeamPage() {
  const theme = useTheme();
  return (
    <DefaultLayout>
      <div
        css={css`
          background: ${theme.colors.white};
          padding-bottom: 25px;
        `}
      >
        <div
          css={css`
            height: 140px;
            display: flex;
            align-items: center;
            background-image: url(${banner});
            background-position: center;
            background-size: cover;
            margin-bottom: 36px;
            padding: 0 10vw;
          `}
        >
          <Typography variant="hero" color="white">
            {' '}
            The ICGC ARGO DCC Team
          </Typography>
        </div>

        <div
          css={css`
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 10vw;
          `}
        >
          {teamData.map((team, i) => (
            <div key={i}>
              <SectionTitle>{team.title}</SectionTitle>
              <TitleBorder color={team.color} width="86px" />

              <Row>
                {chunk(team.members, 6).map((col, i, arr) => (
                  <Col
                    key={i}
                    css={css`
                      max-width: 330px;
                    `}
                    sm={12}
                    md={arr.length === 1 ? 12 : 12 / arr.length}
                  >
                    <Typography
                      variant="paragraph"
                      css={css`
                        line-height: 1.71;
                      `}
                    >
                      {col.map((member, i) => {
                        const title = get(member, 'title', false);
                        return (
                          <span
                            key={i}
                            css={css`
                              display: flex;
                              flex-wrap: wrap;
                            `}
                          >
                            <Typography variant="paragraph2" bold>
                              {`${member.name}${title ? ',\u00A0' : ''}`}
                            </Typography>
                            <span
                              css={css`
                                flex-grow: 1;
                              `}
                            >
                              {title ? `${member.title}` : null}
                            </span>
                          </span>
                        );
                      })}
                    </Typography>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
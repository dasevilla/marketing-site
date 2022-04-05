import React, { Fragment } from 'react';
import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
import { Button } from 'components';

const TIERS = [{
  name: 'Teams',
  ctaLabel: 'Start a free trial',
  ctaLinkTo: '/free-trial/',
}, {
  name: 'Growth',
  ctaLabel: 'Request a demo',
  ctaLinkTo: '/request-demo/',
}];

const sections = [ {
  name: 'Scale',
  features: [{
    name: 'Software components tracked',
    tiers: {
      Teams: 'Unlimited',
      Growth: 'Unlimited',
    },
  }, {
    name: 'API Specs',
    tiers: {
      Teams: 'Unlimited',
      Growth: 'Unlimited',
    },
  }, {
    name: 'TechDocs',
    tiers: {
      Teams: 'Unlimited',
      Growth: 'Unlimited',
    },
  }, {
    name: 'Scaffolder templates',
    tiers: {
      Teams: 'Unlimited',
      Growth: 'Unlimited',
    },
  }, {
    name: 'Minimum seats',
    tiers: {
      Teams: '10',
      Growth: '100',
    },
  }],
}, {
  name: 'Features',
  features: [{
    name: 'Software & teams catalog',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'Weekly Backstage upgrades',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'TechDocs technical documentation',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'Scaffolder service creator',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'API specs',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'Open-source Backstage plugins',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'Locations log',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'Tech radar plugin',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'Kubernetes plugin',
    tiers: { Teams: true, Growth: true }
  }, {
    name: 'Custom, private Backstage plugins',
    tiers: { Growth: true }
  }, {
    name: 'API access',
    tiers: { Growth: true }
  }],
}, {
  name: 'Support',
  features: [{
    name: 'In-app chat',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Slack and email support',
    tiers: { Growth: true },
  }, {
    name: 'SLA',
    tiers: { Growth: true },
  }, {
    name: '24/7 On-call',
    tiers: { Growth: true },
  }],
}];

const FeatureRow = ({ feature, tier }) => (
  <tr key={feature.name} className="border-t border-gray-200">
    <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
      {feature.name}
    </th>
    <td className="py-5 pr-4">
      {typeof feature.tiers[tier.name] === 'string' ? (
        <span className="block text-sm text-gray-700 text-right">{feature.tiers[tier.name]}</span>
      ) : (
        <>
          {feature.tiers[tier.name] === true ? (
            <CheckIcon className="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
          ) : (
            <MinusIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
          )}

          <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
        </>
      )}
    </td>
  </tr>
);

const SectionTable = ({ section, tier, tierIndex }) => (
  <table key={section.name} className="w-full">
    <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
      {section.name}
    </caption>

    <thead>
      <tr>
        <th className="sr-only" scope="col">
          Feature
        </th>
        <th className="sr-only" scope="col">
          Included
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {section.features.map((feature) => (
        <FeatureRow
          feature={feature}
          key={`${tierIndex}-${feature.name}`}
          tier={tier}
        />
      ))}
    </tbody>
  </table>
);

const LargeFeatureRow = ({ feature }) => (
  <tr key={feature.name}>
    <th className="py-5 px-6 text-sm font-normal text-gray-500 text-left" scope="row">
      {feature.name}
    </th>

    {TIERS.map((tier) => (
      <td key={tier.name} className="py-5 px-6">
        {typeof feature.tiers[tier.name] === 'string' ? (
          <span className="block text-sm text-gray-700">{feature.tiers[tier.name]}</span>
        ) : (
          <>
            {feature.tiers[tier.name] === true ? (
              <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
            ) : (
              <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            )}

            <span className="sr-only">
              {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
            </span>
          </>
        )}
      </td>
    ))}
  </tr>
);

const FeatureComparisonTable = () => {
  return (
    <>
      {/* xs to lg */}
      <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
        {TIERS.map((tier, tierIndex) => (
          <section key={tier.name}>
            <div className="px-4 mb-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
            </div>

            {sections.map((section) => (
              <SectionTable section={section} key={section.name} tier={tier} tierIndex={tierIndex} />
            ))}
          </section>
        ))}
      </div>

      {/* lg+ */}
      <div className="hidden lg:block">
        <table className="w-full h-px">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th className="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                <span className="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              {TIERS.map((tier) => (
                <th
                  key={tier.name}
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">
                Get started
              </th>

              {TIERS.map((tier) => (
                <td key={tier.name} className="h-full py-8 px-6 align-top">
                  <div className="relative h-full table">
                    <Button
                      text={tier.ctaLabel}
                      link={true}
                      color="primary"
                      to={tier.ctaLinkTo}
                      fullWidth
                    />
                  </div>
                </td>
              ))}
            </tr>

            {sections.map((section) => (
              <Fragment key={section.name}>
                <tr>
                  <th
                    className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                    colSpan={4}
                    scope="colgroup"
                  >
                    {section.name}
                  </th>
                </tr>
                {section.features.map((feature) => (
                  <LargeFeatureRow feature={feature} key={feature.name} />
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default FeatureComparisonTable;

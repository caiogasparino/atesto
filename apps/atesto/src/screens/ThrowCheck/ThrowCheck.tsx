import { useContext, useEffect, useState } from 'react';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Box,
  Checkbox,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
} from '@mui/material';

import { ReactComponent as IconFilterSelect } from '../../assets/images/icons/icon_filter_select.svg';
import Buttons from '../../components/Buttons/Buttons';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import { UploadContext } from '../../contexts/ThrowUploadContext/ThrowUploadContext';
import { useGetInvoice } from '../../hooks/useGetInvoice';
import { LocaleBr } from '../../locale';
import { getCheckoutData, setStoreCheckout } from '../../store/checkoutSlice';
import { getInvoiceDataId } from '../../store/invoiceIdSlice';
import { closeModal, openModal } from '../../store/modalSlice';
import { Colors } from '../../styles/themes';
import { NotesOrContractsProps } from '../NotesOrContracts/NotesOrContracts';

import {
  Content,
  ScrollableContainer,
  styles,
  Text,
  TextResult,
  Title,
  Wrapper,
} from './styles';
const locale = LocaleBr;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThrowCheckProps {}
export const ThrowCheck = (props: ThrowCheckProps) => {
  const invoiceId = useSelector(getInvoiceDataId);
  const checkout = useSelector(getCheckoutData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { someStateImage, someStateItems } = useContext(UploadContext);

  const { filterInconcistency, getInconsitency } = useGetInvoice();
  const { checkoutData } = checkout;

  console.log(
    'invoiceIdinvoiceIdinvoiceIdinvoiceIdinvoiceIdinvoiceIdinvoiceId',
    invoiceId
  );

  const [answer, setAnswer] = useState('');
  // step 1 check
  const [checkNumberNote, setCheckNumberNote] = useState(
    checkoutData.checkNumberNote
  );
  const [checkValueNote, setCheckValueNote] = useState(
    checkoutData.checkValueNote
  );
  const [checkItems, setCheckItems] = useState(checkoutData.checkItems);
  const [checkCountItems, setCheckCountItems] = useState(
    checkoutData.checkCountItems
  );
  const [checkAddressDelivery, setCheckAddressDelivery] = useState(
    checkoutData.checkAddressDelivery
  );
  // step 2 check
  const [checkrepresentativeSignature, setCheckRepresentativeSignature] =
    useState(checkoutData.checkrepresentativeSignature);
  const [checkinstitutionStamp, setCheckInstitutionStamp] = useState(
    checkoutData.checkinstitutionStamp
  );
  const [checkReceivingDate, setCheckReceivingDate] = useState(
    checkoutData.checkReceivingDate
  );
  // step 3 check
  const [checkinconsistencyOn, setCheckInconsistencyOn] = useState(
    checkoutData.checkinconsistencyOn
  );
  const [checkinconsistencyOff, setCheckInconsistencyOff] = useState(
    checkoutData.checkinconsistencyOff
  );

  const Placeholder: React.FC<NotesOrContractsProps> = ({ children }) => {
    return <div style={styles.placeholder}>{children}</div>;
  };

  useEffect(() => {
    getInconsitency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkinconsistencyOn]);

  const renderSelectFilter: () => JSX.Element[] = () => {
    return filterInconcistency?.map((dt, i) => {
      return (
        <MenuItem style={styles.selectMenu} key={i} value={dt.id}>
          {dt.desc_Tipo}
        </MenuItem>
      );
    });
  };

  const isDisable =
    (checkValueNote &&
      checkNumberNote &&
      checkItems &&
      checkCountItems &&
      checkAddressDelivery &&
      checkrepresentativeSignature &&
      checkinstitutionStamp &&
      checkReceivingDate &&
      !!checkinconsistencyOn) ||
    !!checkinconsistencyOff;

  const handleChangeInconsistencyOn = () => {
    if (!checkinconsistencyOn) {
      setCheckInconsistencyOn(true);
      setCheckInconsistencyOff(false);
    } else {
      setCheckInconsistencyOn(false);
    }
{"version":3,"names":["_shallowEqual","require","_isType","_isPlaceholderType","_definitions","is","type","node","opts","matches","isType","FLIPPED_ALIAS_KEYS","isPlaceholderType","expectedNode","shallowEqual"],"sources":["../../src/validators/is.ts"],"sourcesContent":["import shallowEqual from \"../utils/shallowEqual\";\nimport isType from \"./isType\";\nimport isPlaceholderType from \"./isPlaceholderType\";\nimport { FLIPPED_ALIAS_KEYS } from \"../definitions\";\nimport type * as t from \"..\";\n\nexport default function is<T extends t.Node[\"type\"]>(\n  type: T,\n  node: t.Node | null | undefined,\n  opts?: undefined,\n): node is Extract<t.Node, { type: T }>;\n\nexport default function is<\n  T extends t.Node[\"type\"],\n  P extends Extract<t.Node, { type: T }>,\n>(type: T, n: t.Node | null | undefined, required: Partial<P>): n is P;\n\nexport default function is<P extends t.Node>(\n  type: string,\n  node: t.Node | null | undefined,\n  opts: Partial<P>,\n): node is P;\n\nexport default function is(\n  type: string,\n  node: t.Node | null | undefined,\n  opts?: Partial<t.Node>,\n): node is t.Node;\n/**\n * Returns whether `node` is of given `type`.\n *\n * For better performance, use this instead of `is[Type]` when `type` is unknown.\n */\nexport default function is(\n  type: string,\n  node: t.Node | null | undefined,\n  opts?: Partial<t.Node>,\n): node is t.Node {\n  if (!node) return false;\n\n  const matches = isType(node.type, type);\n  if (!matches) {\n    if (!opts && node.type === \"Placeholder\" && type in FLIPPED_ALIAS_KEYS) {\n      // We can only return true if the placeholder doesn't replace a real node,\n      // but it replaces a category of nodes (an alias).\n      //\n      // t.is(\"Identifier\", node) gives some guarantees about node's shape, so we\n      // can't say that Placeholder(expectedNode: \"Identifier\") is an identifier\n      // because it doesn't have the same properties.\n      // On the other hand, t.is(\"Expression\", node) doesn't say anything about\n      // the shape of node because Expression can be many different nodes: we can,\n      // and should, safely report expression placeholders as Expressions.\n      return isPlaceholderType(node.expectedNode, type);\n    }\n    return false;\n  }\n\n  if (typeof opts === \"undefined\") {\n    return true;\n  } else {\n    return shallowEqual(node, opts);\n  }\n}\n"],"mappings":";;;;;;AAAA,IAAAA,aAAA,GAAAC,OAAA;AACA,IAAAC,OAAA,GAAAD,OAAA;AACA,IAAAE,kBAAA,GAAAF,OAAA;AACA,IAAAG,YAAA,GAAAH,OAAA;AA8Be,SAASI,EAAEA,CACxBC,IAAY,EACZC,IAA+B,EAC/BC,IAAsB,EACN;EAChB,IAAI,CAACD,IAAI,EAAE,OAAO,KAAK;EAEvB,MAAME,OAAO,GAAG,IAAAC,eAAM,EAACH,IAAI,CAACD,IAAI,EAAEA,IAAI,CAAC;EACvC,IAAI,CAACG,OAAO,EAAE;IACZ,IAAI,CAACD,IAAI,IAAID,IAAI,CAACD,IAAI,KAAK,aAAa,IAAIA,IAAI,IAAIK,+BAAkB,EAAE;MAUtE,OAAO,IAAAC,0BAAiB,EAACL,IAAI,CAACM,YAAY,EAAEP,IAAI,CAAC;IACnD;IACA,OAAO,KAAK;EACd;EAEA,IAAI,OAAOE,IAAI,KAAK,WAAW,EAAE;IAC/B,OAAO,IAAI;EACb,CAAC,MAAM;IACL,OAAO,IAAAM,qBAAY,EAACP,IAAI,EAAEC,IAAI,CAAC;EACjC;AACF"}                                                         )
            }
            checked={checkCountItems}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.countItems}:</Text>
          <TextResult>{invoiceId?.produto?.length} </TextResult>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkAddressDelivery
                ? setCheckAddressDelivery(false)
                : setCheckAddressDelivery(true)
            }
            checked={checkAddressDelivery}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.addressDelivery}:</Text>
          <TextResult>{invoiceId?.endereco} </TextResult>
        </Content>

        <Title> {LocaleBr.throwCheck.titleCorrectData} </Title>

        <Content>
          <Checkbox
            onChange={() =>
              checkrepresentativeSignature
                ? setCheckRepresentativeSignature(false)
                : setCheckRepresentativeSignature(true)
            }
            checked={checkrepresentativeSignature}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.representativeSignature}:</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkinstitutionStamp
                ? setCheckInstitutionStamp(false)
                : setCheckInstitutionStamp(true)
            }
            checked={checkinstitutionStamp}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.institutionStamp}:</Text>
        </Content>

        <Content>
          <Checkbox
            onChange={() =>
              checkReceivingDate
                ? setCheckReceivingDate(false)
                : setCheckReceivingDate(true)
            }
            checked={checkReceivingDate}
            sx={{
              color: Colors.font.default,
              '&.Mui-checked': {
                color: Colors.font.default,
              },
            }}
          />
          <Text>{LocaleBr.throwCheck.lblCheck.receivingDate}:</Text>
        </Content>

        <Title> {LocaleBr.throwCheck.titleInconsistency} </Title>

        <Box sx={styles.checkbox}>
          <Content>
            <Checkbox
              onChange={handleChangeInconsistencyOn}
              checked={checkinconsistencyOn}
              sx={{
                color: Colors.font.default,
                '&.Mui-checked': {
                  color: Colors.font.default,
                },
              }}
            />
            <Text>{LocaleBr.throwCheck.lblCheck.inconsistencyOn}</Text>
          </Content>

          <Content>
            <Checkbox
              onChange={handleChangeInconsistencyOff}
              checked={checkinconsistencyOff}
              sx={{
                color: Colors.font.default,
                '&.Mui-checked': {
                  color: Colors.font.default,
                },
              }}
            />
            <Text>{LocaleBr.throwCheck.lblCheck.inconsistencyOff}</Text>
          </Content>
        </Box>
        <Content>
          <Box sx={styles.boxFooter}>
            <Box sx={styles.boxDependency}>
              {checkinconsistencyOn && (
                <>
                  <Select
                    displayEmpty={true}
                    value={answer}
                    IconComponent={IconFilterSelect}
                    sx={styles.filter}
                    onChange={(event) => setAnswer(event.target.value)}
                    renderValue={
                      answer !== ''
                        ? undefined
                        : () => (
                            <Placeholder>
                              {LocaleBr.throwCheck.typeDependency}
                            </Placeholder>
                          )
                    }
                  >
                    {renderSelectFilter()}
                  </Select>
                  {answer !== '' && (
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={6}
                      defaultValue="Escreva qual a inconsistência:"
                      style={styles.textArea}
                    />
                  )}
                </>
              )}
            </Box>
          </Box>
          <Box sx={styles.box}>
            <Modal
              title={locale.throwCheck.confirm}
              children={
                <Box sx={styles.buttonContainer}>
                  <Buttons
                    onClick={handleClose}
                    variant="contained"
                    textButton={locale.component.modal.btnConfirm}
                  />
                </Box>
              }
            />
          </Box>
          {location?.state?.check && someStateImage && someStateItems && (
            <Stack
              marginTop={4}
              spacing={2}
              justifyContent="center"
              direction="row"
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#8bc34a99',
                  borderRadius: 4,
                  paddingLeft: '12px',
                  paddingRight: '12px',
                }}
              >
                <p>
                  <b>{someStateImage.file.name}</b>
                </p>
                <MdOutlineCheckCircleOutline
                  size={30}
                  fill="#fff"
                  style={{ margin: 10 }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#8bc34a99',
                  borderRadius: 4,
                  paddingLeft: '12px',
                  paddingRight: '12px',
                }}
              >
                <p>
                  <b>{someStateItems.file.name}</b>
                </p>
                <MdOutlineCheckCircleOutline
                  size={30}
                  fill="#fff"
                  style={{ margin: 10 }}
                />
              </Box>
            </Stack>
          )}
          <Box sx={styles.boxButton}>
            {!location?.state?.check && (
              <Buttons
                disabled={!isDisable}
                customStyles={isDisable ? styles.button : styles.buttonHover}
                textButton={LocaleBr.throwAttest.confirm}
                onClick={handleNavigate}
              />
            )}
            {location?.state?.check && (
              <Buttons
                disabled={false}
                textButton={LocaleBr.throwAttest.concluded}
                onClick={handleThrowAttestConfirm}
              />
            )}
          </Box>
        </Content>
      </Wrapper>
    </ScrollableContainer>
  );
};

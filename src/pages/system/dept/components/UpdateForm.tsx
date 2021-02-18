import React from 'react';
import {ModalForm, ProFormText} from '@ant-design/pro-form';
import type {TableListItem} from '../data.d';

export interface FormValueType extends Partial<TableListItem> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const {onSubmit} = props

  return (
    <ModalForm
      title="编辑机构"
      width={480}
      visible={props.updateModalVisible}
      onVisibleChange={() => props.onCancel()}
      onFinish={onSubmit}
      initialValues={{
        name: props.values.name,
        id: props.values.id,
        parent_id: props.values.parent_id,
        order_num: props.values.order_num,
      }}
    >
      <ProFormText
        name="id"
        label="id"
        width="xl"
        hidden
      />
      <ProFormText
        name="parent_id"
        label="parent_id"
        width="xl"
        hidden
      />
      <ProFormText
        name="name"
        label="机构名称"
        width="xl"
        rules={[{required: true, message: '请输入用户名！'}]}
      />
      <ProFormText
        name="order_num"
        label="排序"
        width="xl"
      />

    </ModalForm>
  )
};

export default UpdateForm;
